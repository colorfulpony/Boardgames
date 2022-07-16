<?php

namespace App\Services;

use Illuminate\Support\Str;
use App\Models\Post;
use App\Services\CoreService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;

class PostService extends CoreService
{
    public function store($data)
    {
        $image_name = $data['title'] . '_' . $data['image']->hashName();

        $saveImage = $data['image']->storeAs('public/images/post/', $image_name);

        $data['image'] = $image_name;

        $post = Post::create($data);

        return $post;
    }


    public function update($data, $postId)
    {
        $post = Post::find($postId);

        File::delete(public_path() . '/storage/images/post/' . $post->image);

        $image_name = $data['title'] . '_' . $data['image']->hashName();

        $saveImage = $data['image']->storeAs('public/images/post/', $image_name);

        $data['image'] = $image_name;

        $res = $post->update($data);

        return $res;
    }
}
