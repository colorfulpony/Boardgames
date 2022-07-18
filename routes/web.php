<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostsTagController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Models\Order;
use App\Models\Post;
use App\Models\PostsTag;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('login', [LoginController::class, 'login'])->name('login');
Route::post('login', [LoginController::class, 'loginStore'])->name('login.store');
Route::get('register', [LoginController::class, 'register'])->name('register');
Route::post('register', [LoginController::class, 'registerStore'])->name('register.store');
Route::post('logout', [LoginController::class, 'logout'])->name('logout');

Route::middleware('auth')->group(function() {
    Route::get('/', function () {
        return inertia('Home');
    });

    Route::get('/posts-tags', [PostsTagController::class, 'index'])->name('posts-tag.index')->can('viewAny', PostsTag::class);
    Route::get('/posts-tag/create', [PostsTagController::class, 'create'])->name('posts-tag.create')->can('create', PostsTag::class);
    Route::post('/posts-tag/create', [PostsTagController::class, 'store'])->name('posts-tag.store')->can('create', PostsTag::class);
    Route::get('/posts-tag/{id}/edit', [PostsTagController::class, 'edit'])->name('posts-tag.edit')->can('update', PostsTag::class);
    Route::post('/posts-tag/update', [PostsTagController::class, 'update'])->name('posts-tag.update')->can('update', PostsTag::class);
    Route::delete('/posts-tag/{id}', [PostsTagController::class, 'destroy'])->name('posts-tag.destroy')->can('delete', PostsTag::class);
    Route::get('/posts-tag/restore/{id}', [PostsTagController::class, 'restore'])->name('posts-tag.restore')->can('restore', PostsTag::class);

    Route::get('/posts', [PostController::class, 'index'])->name('post.index')->can('viewAny', Post::class);
    Route::get('/post/create', [PostController::class, 'create'])->name('post.create')->can('create', Post::class);
    Route::post('/post/create', [PostController::class, 'store'])->name('post.store')->can('create', Post::class);
    Route::get('/post/{id}/edit', [PostController::class, 'edit'])->name('post.edit')->can('update', Post::class);
    Route::post('/post/update', [PostController::class, 'update'])->name('post.update')->can('update', Post::class);
    Route::delete('/post/{id}', [PostController::class, 'destroy'])->name('post.destroy')->can('delete', Post::class);
    Route::get('/post/restore/{id}', [PostController::class, 'restore'])->name('post.restore')->can('restore', Post::class);

    Route::get('/orders', [OrderController::class, 'index'])->name('order.index')->can('viewAny', Order::class);
    Route::get('/order/create', [OrderController::class, 'create'])->name('order.create')->can('create', Order::class);
    Route::post('/order/create', [OrderController::class, 'store'])->name('order.store')->can('create', Order::class);
    Route::get('/order/{id}/edit', [OrderController::class, 'edit'])->name('order.edit')->can('update', Order::class);
    Route::post('/order/update', [OrderController::class, 'update'])->name('order.update')->can('update', Order::class);
    Route::delete('/order/{id}', [OrderController::class, 'destroy'])->name('order.destroy')->can('delete', Order::class);
    Route::get('/order/restore/{id}', [OrderController::class, 'restore'])->name('order.restore')->can('restore', Order::class);

    Route::get('/product_categories', [ProductCategoryController::class, 'index'])->name('product_category.index')->can('viewAny', ProductCategory::class);
    Route::get('/product_category/create', [ProductCategoryController::class, 'create'])->name('product_category.create')->can('create', ProductCategory::class);
    Route::post('/product_category/create', [ProductCategoryController::class, 'store'])->name('product_category.store')->can('create', ProductCategory::class);
    Route::get('/product_category/{id}/edit', [ProductCategoryController::class, 'edit'])->name('product_category.edit')->can('update', ProductCategory::class);
    Route::post('/product_category/update', [ProductCategoryController::class, 'update'])->name('product_category.update')->can('update', ProductCategory::class);
    Route::delete('/product_category/{id}', [ProductCategoryController::class, 'destroy'])->name('product_category.destroy')->can('delete', ProductCategory::class);
    Route::get('/product_category/restore/{id}', [ProductCategoryController::class, 'restore'])->name('product_category.restore')->can('restore', ProductCategory::class);

    Route::get('/products', [ProductController::class, 'index'])->name('product.index')->can('viewAny', Product::class);
    Route::get('/product/create', [ProductController::class, 'create'])->name('product.create')->can('create', Product::class);
    Route::post('/product/create', [ProductController::class, 'store'])->name('product.store')->can('create', Product::class);
    Route::get('/product/{id}/edit', [ProductController::class, 'edit'])->name('product.edit')->can('update', Product::class);
    Route::post('/product/update', [ProductController::class, 'update'])->name('product.update')->can('update', Product::class);
    Route::delete('/product/{id}', [ProductController::class, 'destroy'])->name('product.destroy')->can('delete', Product::class);
    Route::get('/product/restore/{id}', [ProductController::class, 'restore'])->name('product.restore')->can('restore', Product::class);
});

