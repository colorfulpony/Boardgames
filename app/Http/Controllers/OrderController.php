<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
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
            // 'can' => [
            //     'create' => Auth::user()->can('create', User::class)
            // ]
            'filters' => Request::only(['search']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Orders/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'delivery_adress' => 'required|string',
            'full_cost' => 'required|integer',
            'date_of_order' => 'required|date',
            'date_of_payment' => 'required|date',
            'user_id' => ['required', 'integer'],
        ]);

        $post = Order::create($data);

        if ($post) {
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

    public function update(Request $request)
    {
        $orderId = $request->input('id');


        $data = $request->validate([
            'delivery_adress' => 'required|string',
            'full_cost' => 'required|integer',
            'date_of_order' => 'required|date',
            'date_of_payment' => 'required|date',
        ]);

        $order = Order::find($orderId);

        $res = $order->update($data);

        if ($res) {
            return redirect()->route('order.index')->with('msg', 'Successfuly updated');
        }
    }
}
