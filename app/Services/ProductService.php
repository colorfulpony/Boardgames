<?php

namespace App\Services;

use App\Models\Product;
use App\Services\CoreService;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class ProductService extends CoreService
{
    public function store($data)
    {
        $image_name = $data['name'] . '_' . $data['image']->hashName();

        $saveImage = $data['image']->storeAs('public/images/product/', $image_name);

        $data['image'] = $image_name;

        $product = Product::create($data);

        return $product;
    }

    public function update($data, $productId)
    {
        $product = Product::find($productId);

        File::delete(public_path() . '/storage/images/product/' . $product->image);

        $image_name = $data['name'] . '_' . $data['image']->hashName();

        $saveImage = $data['image']->storeAs('public/images/product/', $image_name);

        $data['image'] = $image_name;

        $res = $product->update($data);

        return $res;
    }
}
