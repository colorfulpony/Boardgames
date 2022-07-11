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
        $order = Order::create($data);

        return $order;
    }

    public function update($data, $orderId)
    {
        $order = Order::find($orderId);

        $res = $order->update($data);

        return $res;
    }

    protected function getSlug($slug, $title)
    {
        if(!$slug) {
            $title = $title;
            $slug = Str::slug($title);
        } else {
            $slug = Str::slug($slug);
        }

        return $slug;
    }
}
