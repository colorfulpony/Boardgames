<?php

namespace App\Services;

use Illuminate\Support\Str;

use App\Models\Post;

class PostService extends CoreService
{
    public function store($data)
    {
        if(!$data['slug']) {
            $title = $data['title'];
            $slug = Str::slug($title);
        } else {
            $slug = $data['slug'];
            $slug = Str::slug($slug);
        }

        $data['slug'] = $slug;

        $post = Post::create($data);

        return $post;
    }
}
