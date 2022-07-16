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
        $data['user_id'] = 1;

        $order = Order::create($data);

        return $order;
    }

    public function update($data, $orderId)
    {
        $data['user_id'] = 1;

        $order = Order::find($orderId);

        $res = $order->update($data);

        return $res;
    }
}
