<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\OrderStoreRequest;
use App\Http\Requests\Order\OrderUpdateRequest;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Product;
use App\Models\User;
use App\Services\OrderService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use stdClass;

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
                ->with('products')
                ->join('users', 'orders.user_id', '=', 'users.id')
                ->select(['orders.id', 'orders.delivery_adress', 'orders.full_cost', 'orders.date_of_order', 'orders.deleted_at', 'users.username as username'])
                ->paginate(10)
                ->withQueryString(),
            'can' => [
                'create' => Auth::user()->can('create', Order::class),
                'edit' => Auth::user()->can('update', Order::class),
                'delete' => Auth::user()->can('delete', Order::class),
                'restore' => Auth::user()->can('restore', Order::class),
            ],
            'filters' => Request::only(['search']),
            'productsAmount' => OrderProduct::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Orders/Create', [
            'users' => collect(User::query()->select(['id', 'name'])->get()),

            'products' => Product::all(),
        ]);
    }

    public function store(OrderStoreRequest $request)
    {

        $data = $request->validated();
        $order = $this->service->store($data);
        // dd($order);

        if ($order) {
            return redirect()->route('order.index')->with('msg', 'Successfuly created');
        }
    }

    public function edit($orderId)
    {
        $order_products = Order::find($orderId)->products()->get();
        $order_products_id_amounts = [];
        foreach($order_products as $order_product) {
            $order_product_id_amount = new stdClass();
            $order_product_id_amount->product_id = $order_product->pivot->product_id;
            $order_product_id_amount->amount = $order_product->pivot->amount;

            array_push($order_products_id_amounts, $order_product_id_amount);
        }

        $order = Order::withTrashed()->findOrFail($orderId);
        return Inertia::render('Orders/Edit', [
            'order' => $order,

            'order_products_id_amounts' => $order_products_id_amounts,

            'products' => Product::all(),

            'users' => collect(User::query()->select(['id', 'username'])->get())
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
