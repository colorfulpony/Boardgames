<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
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
        return [
            'name' => 'required|string|unique:products',
            'image' => 'required|image|mimes:jpeg,jpg,png,svg|max:2048',
            'price' => 'required|integer',
            'sale' => 'required|integer',
            'description' => 'required|string',
            'available' => 'boolean',
            'product_category_id' => 'required|integer|gt:0',
        ];
    }
}
