<?php

namespace App\Services;

use App\Models\ProductCategory;
use App\Services\CoreService;
use Illuminate\Support\Str;

class ProductCategoryService extends CoreService
{
    public function store($data)
    {
        $productCategory = ProductCategory::create($data);

        return $productCategory;
    }

    public function update($data, $productCategoryId)
    {
        $productCategory = ProductCategory::withTrashed()->find($productCategoryId);

        $res = $productCategory->update($data);

        return $res;
    }
}
