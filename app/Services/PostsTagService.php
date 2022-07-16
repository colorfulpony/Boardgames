<?php

namespace App\Services;

use App\Models\PostsTag;
use App\Services\CoreService;

class PostsTagService extends CoreService
{
    public function store($data)
    {
        $postsTag = PostsTag::create($data);

        return $postsTag;
    }

    public function update($data, $postId)
    {
        $postsTag = PostsTag::find($postId);

        $res = $postsTag->update($data);

        return $res;
    }
}
