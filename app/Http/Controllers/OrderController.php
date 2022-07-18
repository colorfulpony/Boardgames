<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\OrderUpdateRequest;
use App\Models\Order;
use App\Services\OrderService;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class OrderController extends CoreController
{
    public function __construct(OrderService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('Orders/Index', [
            'orders' => Order::query()
                ->when(Request::input('search'), function ($query, $search) {
                    $query->where('delivery_adress', 'like', "%{$search}%");
                })
                ->withTrashed()
                ->orderBy('deleted_at', 'asc')
                ->select(['id', 'delivery_adress', 'full_cost', 'date_of_order', 'deleted_at'])
                ->paginate(10)
                ->withQueryString(),
            'can' => [
                'create' => Auth::user()->can('create', Order::class),
                'edit' => Auth::user()->can('update', Order::class),
                'delete' => Auth::user()->can('delete', Order::class),
                'restore' => Auth::user()->can('restore', Order::class),
            ],
            'filters' => Request::only(['search']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Orders/Create');
    }

    public function store(OrderUpdateRequest $request)
    {
        $data = $request->validated();

        $order = $this->service->store($data);

        if ($order) {
            return redirect()->route('order.index')->with('msg', 'Successfuly created');
        }
    }

    public function edit($orderId)
    {
        $order = Order::findOrFail($orderId);
        return Inertia::render('Orders/Edit', [
            'order' => $order
        ]);
    }

    public function update(OrderUpdateRequest $request)
    {
        $orderId = $request->input('id');

        $data = $request->validated();

        $res = $this->service->update($data, $orderId);

        if ($res) {
            return redirect()->route('order.index')->with('msg', 'Successfuly updated');
        }
    }

    public function destroy($orderId)
    {
        $orderDelete = Order::find($orderId)->delete();

        if ($orderDelete) {
            return redirect()->route('order.index')->with('msg', 'Successfuly deleted');
        }
    }

    public function restore($orderId)
    {
        $orderRestore = Order::withTrashed()->find($orderId)->restore();

        if ($orderRestore) {
            return redirect()->route('order.index')->with('msg', 'Successfuly restored');
        }
    }
}
