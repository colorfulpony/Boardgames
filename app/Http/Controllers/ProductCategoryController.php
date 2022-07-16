<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductCategory\ProductCategoryStoreRequest;
use App\Http\Requests\ProductCategory\ProductCategoryUpdateRequest;
use App\Models\ProductCategory;
use App\Services\ProductCategoryService;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class ProductCategoryController extends CoreController
{
    public function __construct(ProductCategoryService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('ProductCategories/Index', [
            'productCategories' => ProductCategory::query()
            ->when(Request::input('search'), function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->select(['id', 'slug', 'title', 'description'])
            ->paginate(10)
            ->withQueryString(),
            'can' => [
                'create' => Auth::user()->can('create', ProductCategory::class),
                'edit' => Auth::user()->can('update', ProductCategory::class),
            ],
            'filters' => Request::only(['search']),
        ]);
    }

    public function create()
    {
        return Inertia::render('ProductCategories/Create');
    }

    public function store(ProductCategoryStoreRequest $request)
    {
        $data = $request->validated();

        $productCategory = $this->service->store($data);

        if ($productCategory) {
            return redirect()->route('product_category.index')->with('msg', 'Successfuly created');
        }
    }

    public function edit($productCategoryId)
    {
        $productCategory = ProductCategory::findOrFail($productCategoryId);
        return Inertia::render('ProductCategories/Edit', [
            'productCategory' => $productCategory,
        ]);
    }

    public function update(ProductCategoryUpdateRequest $request)
    {
        $productCategoryId = $request->id;

        $data = $request->validated();

        $res = $this->service->update($data, $productCategoryId);

        if ($res) {
            return redirect()->route('product_category.index')->with('msg', 'Successfuly updated');
        }
    }
}
