<?php

namespace App\Services;

use App\Models\Product;
use App\Services\CoreService;
use Illuminate\Support\Str;

class ProductService extends CoreService
{
    public function store($data)
    {
        $product = Product::create($data);

        return $product;
    }

    public function update($data, $productId)
    {
        $product = Product::find($productId);

        $res = $product->update($data);

        return $res;
    }
}
