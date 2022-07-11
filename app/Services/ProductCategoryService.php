<?php

namespace App\Services;

use App\Models\ProductCategory;
use App\Services\CoreService;
use Illuminate\Support\Str;

class ProductCategoryService extends CoreService
{
    public function store($data)
    {
        $slug = $this->getSlug($data['slug'], $data['title']);

        $data['slug'] = $slug;

        $productCategory = ProductCategory::create($data);

        return $productCategory;
    }

    public function update($data, $productCategoryId)
    {
        $slug = $this->getSlug($data['slug'], $data['title']);

        $data['slug'] = $slug;

        $productCategory = ProductCategory::find($productCategoryId);

        $res = $productCategory->update($data);

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
