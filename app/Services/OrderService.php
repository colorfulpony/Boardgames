<?php

namespace App\Services;

use App\Models\Order;
use App\Models\PostsTag;
use App\Services\CoreService;
use Illuminate\Support\Str;

class OrderService extends CoreService
{
    public function store($data)
    {
        $products_id_amounts = $data['products_id'];
        $products_id = [];
        $amounts = [];
        unset($data['products_id']);

        $order = Order::create($data);

        $orderId = $order->id;

        foreach($products_id_amounts as $product_id_amount) {
            $order->products()->attach($product_id_amount['product_id'], ['amount' => $product_id_amount['amount'], 'order_id' => $orderId]);
            // dd($order->products()->attach($product_id['product_id'], ['amount' => $product_id['amount']]));
            // array_push($products_id, $product_id['product_id']);
            // array_push($amounts, $product_id['amount']);
        }

        // $test = $order->products()->attach($products_id, $amounts);


        return $order;
    }

    public function update($data, $orderId)
    {
        if(array_key_exists('products_id', $data)) {
            $products_id_amounts = $data['products_id'];
            $products_id = [];
            $amounts = [];
            unset($data['products_id']);
            $productsIdExisted = true;
        } else {
            $productsIdExisted = false;
        }

        $order = Order::withTrashed()->find($orderId);

        $res = $order->update($data);

        if($productsIdExisted) {
            $data = [];
            foreach($products_id_amounts as $product_id_amount) {
                $test = [];
                $data[$product_id_amount['product_id']] = [ 'amount' => $product_id_amount['amount'], 'order_id' => $orderId];
            }
            $order->products()->sync($data);
        }

        if(!$productsIdExisted) {
            $order->products()->detach();
        }

        return $res;
    }
}
