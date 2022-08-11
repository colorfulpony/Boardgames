<?php

namespace App\Http\Controllers;

use App\Models\OrderProduct;
use Illuminate\Http\Request;

class OrderProductController extends Controller
{
    public function destroy($orderId, $productId)
    {
        OrderProduct::where('order_id', $orderId)->where('product_id', $productId)->delete();
    }
}
