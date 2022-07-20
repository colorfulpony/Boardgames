<?php

namespace App\Http\Requests\Product;

use App\Rules\CheckImageDataTypeRule;
use Illuminate\Foundation\Http\FormRequest;

class ProductUpdateRequest extends FormRequest
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
            'name' => 'unique:products,name,' . $this->id . '|required|string',
            'amount' => 'required|integer|gt:-1',
            'image' => new CheckImageDataTypeRule(),
            'price' => 'required|integer|gt:-1',
            'sale' => 'required|integer|gt:-1',
            'real_price' => 'required|integer|gt:-1',
            'description' => 'required|string',
            'available' => 'boolean',
            'product_category_id' => 'required|integer|gt:0',
        ];
    }
}
