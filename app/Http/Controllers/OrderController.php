<?php

namespace App\Http\Controllers;

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
                ->select(['id', 'delivery_adress', 'full_cost', 'date_of_order'])
                ->paginate(10)
                ->withQueryString(),
            'can' => [
                'create' => Auth::user()->can('create', Order::class),
                'edit' => Auth::user()->can('update', Order::class),
            ],
            'filters' => Request::only(['search']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Orders/Create');
    }

    public function store(HttpRequest $request)
    {
        $data = $request->validate([
            'delivery_adress' => 'required|string',
            'full_cost' => 'required|integer',
            'date_of_order' => 'required|date',
            'date_of_payment' => 'required|date',
            'user_id' => ['required', 'integer'],
        ]);

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

    public function update(HttpRequest $request)
    {
        $orderId = $request->input('id');


        $data = $request->validate([
            'delivery_adress' => 'required|string',
            'full_cost' => 'required|integer',
            'date_of_order' => 'required|date',
            'date_of_payment' => 'required|date',
        ]);

        $res = $this->service->update($data, $orderId);

        if ($res) {
            return redirect()->route('order.index')->with('msg', 'Successfuly updated');
        }
    }
}
