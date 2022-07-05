<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostsTagController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
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

    Route::get('/posts-tags', [PostsTagController::class, 'index'])->name('posts-tag.index');
    Route::get('/posts-tag/create', [PostsTagController::class, 'create'])->name('posts-tag.create');
    Route::post('/posts-tag/create', [PostsTagController::class, 'store'])->name('posts-tag.store');
    Route::get('/posts-tag/{id}/edit', [PostsTagController::class, 'edit'])->name('posts-tag.edit');
    Route::post('/posts-tag/update', [PostsTagController::class, 'update'])->name('posts-tag.update');

    Route::get('/posts', [PostController::class, 'index'])->name('post.index');
    Route::get('/post/create', [PostController::class, 'create'])->name('post.create');
    Route::post('/post/create', [PostController::class, 'store'])->name('post.store');
    Route::get('/post/{id}/edit', [PostController::class, 'edit'])->name('post.edit');
    Route::post('/post/update', [PostController::class, 'update'])->name('post.update');

    Route::get('/orders', [OrderController::class, 'index'])->name('order.index');
    Route::get('/order/create', [OrderController::class, 'create'])->name('order.create');
    Route::post('/order/create', [OrderController::class, 'store'])->name('order.store');
    Route::get('/order/{id}/edit', [OrderController::class, 'edit'])->name('order.edit');
    Route::post('/order/update', [OrderController::class, 'update'])->name('order.update');

    Route::get('/product_categories', [ProductCategoryController::class, 'index'])->name('product_category.index');
    Route::get('/product_category/create', [ProductCategoryController::class, 'create'])->name('product_category.create');
    Route::post('/product_category/create', [ProductCategoryController::class, 'store'])->name('product_category.store');
    Route::get('/product_category/{id}/edit', [ProductCategoryController::class, 'edit'])->name('product_category.edit');
    Route::post('/product_category/update', [ProductCategoryController::class, 'update'])->name('product_category.update');

    Route::get('/products', [ProductController::class, 'index'])->name('product.index');
    Route::get('/product/create', [ProductController::class, 'create'])->name('product.create');
    Route::post('/product/create', [ProductController::class, 'store'])->name('product.store');
    Route::get('/product/{id}/edit', [ProductController::class, 'edit'])->name('product.edit');
    Route::post('/product/update', [ProductController::class, 'update'])->name('product.update');
});

