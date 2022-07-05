<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => Product::query()
            ->when(Request::input('search'), function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->select(['id', 'name', 'price', 'sale', 'available'])
            ->paginate(10)
            ->withQueryString(),
            // ->through(fn($product) => [
            //     'id' => $product->id,
            //     'name' => $product->name,
            //     'price' => $product->price,
            //     'sale' => $product->sale,
            //     'available' => $product->available
            // ])
            // 'can' => [
            //     'create' => Auth::user()->can('create', User::class)
            // ]
            'filters' => Request::only(['search']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/Create', [
            'productCategories' => collect(ProductCategory::query()->select(['id', 'title'])->get())
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|unique:products',
            'price' => 'required|integer',
            'sale' => 'required|integer',
            'description' => 'required|string',
            'available' => 'boolean',
            'product_category_id' => ['required', 'integer', 'gt:0'],
        ]);

        $product = Product::create($data);

        if ($product) {
            return redirect()->route('product.index')->with('msg', 'Successfuly created');
        }
    }

    public function edit($productId)
    {
        $product = Product::findOrFail($productId);
        return Inertia::render('Products/Edit', [
            'product' => $product,
            'productCategories' => collect(ProductCategory::query()->select(['id', 'title'])->get())
        ]);
    }

    public function update(Request $request)
    {
        $productId = $request->input('id');

        $data = $request->validate([
            'name' => 'required|string|unique:products,name,' . $productId,
            'price' => 'required|integer',
            'sale' => 'required|integer',
            'description' => 'required|string',
            'available' => 'boolean',
            'product_category_id' => ['required', 'integer', 'gt:0'],
        ]);

        $product = Product::find($productId);

        $res = $product->update($data);

        if ($res) {
            return redirect()->route('product.index')->with('msg', 'Successfuly updated');
        }
    }
}
