<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        // dd($this);
        return [
            'username' => 'required|unique:users,username',
            'first_name' => 'nullable|string',
            'last_name' => 'nullable|string',
            'image' => 'required|image|mimes:jpeg,jpg,png,svg|max:2048',
            'password' => 'required',
            'country' => 'nullable|string',
            'city' => 'nullable|string',
            'street' => 'nullable|string',
            'email' => 'required|email|unique:users,email',
            'role' => 'required|integer|gt:0',
            'email_verified_at' => 'nullable|date',
        ];
    }
}
