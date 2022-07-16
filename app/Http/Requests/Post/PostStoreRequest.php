<?php

namespace App\Http\Requests\Post;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class PostStoreRequest extends FormRequest
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
        if(!$this->slug) {
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
            'title' => 'required|string',
            'slug' => 'unique:posts,slug|nullable|string',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,jpg,png,svg|max:2048',
            'is_published' => 'boolean',
            'user_id' => 'required|integer',
            'posts_tag_id' => 'required|integer|gt:0',
        ];
    }
}
