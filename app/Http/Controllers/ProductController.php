<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\ProductStoreRequest;
use App\Http\Requests\Product\ProductUpdateRequest;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Services\ProductService;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class ProductController extends CoreController
{
    public function __construct(ProductService $service)
    {
        $this->service = $service;
    }

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
            'can' => [
                'create' => Auth::user()->can('create', Product::class),
                'edit' => Auth::user()->can('update', Product::class),
            ],
            'filters' => Request::only(['search']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/Create', [
            'productCategories' => collect(ProductCategory::query()->select(['id', 'title'])->get())
        ]);
    }

    public function store(ProductStoreRequest $request)
    {
        $data = $request->validated();

        $product = $this->service->store($data);

        if ($product) {
            return redirect()->route('product.index')->with('msg', 'Successfuly created');
        }
    }

    public function edit($productId)
    {
        $product = Product::findOrFail($productId);
        return Inertia::render('Products/Edit', [
            'product' => $product,
            'image' => asset('storage/images/product/' . $product->image),
            'imageName' => $product->image,
            'productCategories' => collect(ProductCategory::query()->select(['id', 'title'])->get())
        ]);
    }

    public function update(ProductUpdateRequest $request)
    {
        $productId = $request->id;

        $data = $request->validated();

        $res = $this->service->update($data, $productId);

        if ($res) {
            return redirect()->route('product.index')->with('msg', 'Successfuly updated');
        }
    }
}
