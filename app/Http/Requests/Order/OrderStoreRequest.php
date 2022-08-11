<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;

class OrderStoreRequest extends FormRequest
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
            'delivery_adress' => 'required|string',
            'full_cost' => 'required|integer',
            'date_of_order' => 'required|date|before_or_equal:date_of_payment',
            'date_of_payment' => 'nullable|date|after_or_equal:date_of_order',
            'user_id' => 'required|integer',
            'products_id.*.*' => 'integer',
        ];
    }
}
