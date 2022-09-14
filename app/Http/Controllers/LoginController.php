<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use stdClass;

class LoginController extends Controller
{
    public function login()
    {
        return Inertia::render('Auth/Login');
    }

    public function loginStore(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $user = User::where('email', $request->email)->get('id');
            $userId = $user[0]->id;

            $productsData = $request->products;
            foreach ($productsData as $productData) {
                $product_id = $productData['product_id'];
                $amount = $productData['amount'];

                $productInCart = Cart::where('product_id', $product_id)->where('user_id', $userId)->first();
                
                if (!$productInCart) {
                    Cart::create([
                        'product_id' => $product_id,
                        'amount' => $amount,
                        'user_id' => $userId,
                    ]);
                } else {
                    $productInCart->amount += $amount;
                    $productInCart->save();
                }
            }

            $cartAmount = Cart::where('user_id', $userId)->sum('amount');

            $request->session()->regenerate();

            return redirect('/user')->with('cartAmount', $cartAmount);
        }


        return back()->withErrors([
            'submit' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function register()
    {
        return Inertia::render('Auth/Register');
    }

    public function registerStore(Request $request)
    {
        $info = $request->validate([
            'name' => ['required', 'string'],
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if($info) {
            User::firstOrCreate($info);

            return redirect('/login');
        }

        return back()->withErrors([
            'msg' => 'Something went wrong'
        ])->withInput(['email', 'name']);
    }

    public function logout() {
        Auth::logout();

        return redirect()->route('login');
    }
}
