<?php

namespace App\Services;

use App\Models\Post;
use App\Services\CoreService;
use Illuminate\Support\Str;

class PostService extends CoreService
{
    public function store($data)
    {
        $slug = $this->getSlug($data['slug'], $data['title']);

        $data['slug'] = $slug;

        $post = Post::create($data);

        return $post;
    }

    public function update($data, $postId)
    {
        $slug = $this->getSlug($data['slug'], $data['title']);

        $data['slug'] = $slug;

        $post = Post::find($postId);

        $res = $post->update($data);

        return $res;
    }

    protected function getSlug($slug, $title)
    {
        if(!$slug) {
            $title = $title;
            $slug = Str::slug($title);
        } else {
            $slug = Str::slug($slug);
        }

        return $slug;
    }
}
