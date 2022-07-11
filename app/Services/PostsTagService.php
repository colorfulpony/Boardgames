<?php

namespace App\Services;

use App\Models\PostsTag;
use App\Services\CoreService;
use Illuminate\Support\Str;

class PostsTagService extends CoreService
{
    public function store($data)
    {
        $slug = $this->getSlug($data['slug'], $data['title']);

        $data['slug'] = $slug;

        $postsTag = PostsTag::create($data);

        return $postsTag;
    }

    public function update($data, $postId)
    {
        $slug = $this->getSlug($data['slug'], $data['title']);

        $data['slug'] = $slug;

        $postsTag = PostsTag::find($postId);

        $res = $postsTag->update($data);

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
