<?php

namespace App\Services;

<<<<<<< HEAD
use Illuminate\Support\Str;

use App\Models\Post;
=======
use App\Models\Post;
use App\Services\CoreService;
use Illuminate\Support\Str;
>>>>>>> slugFunction

class PostService extends CoreService
{
    public function store($data)
    {
<<<<<<< HEAD
        if(!$data['slug']) {
            $title = $data['title'];
            $slug = Str::slug($title);
        } else {
            $slug = $data['slug'];
            $slug = Str::slug($slug);
        }
=======
        $slug = $this->getSlug($data['slug'], $data['title']);
>>>>>>> slugFunction

        $data['slug'] = $slug;

        $post = Post::create($data);

        return $post;
    }
<<<<<<< HEAD
=======

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
>>>>>>> slugFunction
}