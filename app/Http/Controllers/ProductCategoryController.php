<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class ProductCategoryController extends Controller
{
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

    public function store(Request $request)
    {
        $productCategoryId = $request->input('id');

        $data = $request->validate([
            'title' => 'required|string|unique:product_categories,title,' . $productCategoryId,
            'slug' => 'required|string|unique:product_categories,slug,' . $productCategoryId,
            'description' => 'required|string',
        ]);

        $productCategory = ProductCategory::create($data);

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

    public function update(Request $request)
    {
        $productCategoryId = $request->input('id');

        $data = $request->validate([
            'title' => 'required|string|unique:product_categories,title,' . $productCategoryId,
            'slug' => 'required|string|unique:product_categories,slug,' . $productCategoryId,
            'description' => 'required|string',
        ]);

        $productCategory = ProductCategory::find($productCategoryId);

        $res = $productCategory->update($data);

        if ($res) {
            return redirect()->route('product_category.index')->with('msg', 'Successfuly updated');
        }
    }
}
