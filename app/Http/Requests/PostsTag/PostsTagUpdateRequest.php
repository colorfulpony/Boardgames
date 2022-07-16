<?php

namespace App\Http\Requests\PostsTag;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class PostsTagUpdateRequest extends FormRequest
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
            'title' => 'unique:posts_tags,title,' . $this->id,
            'slug' => 'unique:posts_tags,slug,' . $this->id . '|nullable|string',
        ];
    }
}
