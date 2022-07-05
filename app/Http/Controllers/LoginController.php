<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

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
            $request->session()->regenerate();

            return redirect('/');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
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
