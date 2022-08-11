<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
            'username' => 'unique:users,username,' . $this->id . "|required",
            'first_name' => 'nullable|string',
            'last_name' => 'nullable|string',
            'image' => 'image|mimes:jpeg,jpg,png,svg|max:2048',
            'current_password' => 'nullable|current_password|required_with:new_password',
            'new_password' => 'nullable|required_with:current_password',
            'country' => 'nullable',
            'city' => 'nullable',
            'street' => 'nullable',
            'email' => 'unique:users,email,' . $this->id . "|required|email|",
            'role' => 'required|integer|gt:0',
            'email_verified_at' => 'nullable|date',
        ];
    }
}
