<?php

namespace App\Http\Requests\ProductCategory;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class ProductCategoryUpdateRequest extends FormRequest
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
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        if (!$this->slug) {
            $title = $this->title;
            $slug = Str::slug($title);
        } else {
            $slug = Str::slug($this->slug);
        }
        $this->merge([
            'slug' => $slug,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'required|string|unique:product_categories,title,' . $this->id,
            'slug' => 'unique:product_categories,slug,' . $this->id . '|nullable|string',
            'description' => 'required|string',
        ];
    }
}
