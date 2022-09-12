<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends CoreController
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index() {
        return Inertia::render('UserSide/Cart');
    }

    public function store(Request $request) {
        // dd('test', $request);
        $currentUser = auth()->user();
        $userId = $currentUser->id;
        $productId = $request->product_id;
        $amount = $request->amount;

        $cart = Cart::where('product_id', $productId)->where('user_id', $userId)->first();

        if(!$cart) {
            Cart::create([
                'product_id' => $productId,
                'amount' => $amount,
                'user_id' => $userId,
            ]);
        } else {
            $cart->amount += $amount;
            $cart->save();
        }

        $cartAmount = Cart::where('user_id', $userId)->sum('amount');

        return redirect()->back()->with('cartAmount', $cartAmount);
    }
}
