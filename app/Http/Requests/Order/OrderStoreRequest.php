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
        return [
            'delivery_adress' => 'required|string',
            'full_cost' => 'required|integer',
            'date_of_order' => 'required|date',
            'date_of_payment' => 'required|date',
            'user_id' => 'required|integer',
        ];
    }
}
