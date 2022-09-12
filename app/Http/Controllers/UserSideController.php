<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class UserSideController extends CoreController
{
    public function homePage() {
        return Inertia::render('Home');
    }

    public function getAllProducts() {
        return Inertia::render('UserSide/Products', [
            'products' => Product::query()
            ->when(Request::input('search'), function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->withTrashed()
            ->where('available', '=', 1)
            ->orderBy('deleted_at', 'asc')
            ->select(['id', 'name', 'image', 'real_price', 'sale', 'available', 'amount'])
            ->paginate(10)
            ->withQueryString(),
        ]);
    }

    public function getProduct($productId) {
        $product = Product::findOrFail($productId, ['id', 'name', 'image', 'amount', 'product_category_id', 'price', 'sale', 'real_price', 'description']);
        return Inertia::render('UserSide/Product', [
            'product' => $product,
            'image' => asset('storage/images/product/' . $product->image),
            'productCategories' => collect(ProductCategory::query()->select(['id', 'title'])->get())
        ]);
    }
}
