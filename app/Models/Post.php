<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory, SoftDeletes;


    protected $guarded = [];

    public function postsTags()
    {
        return $this->belongsToMany(PostsTag::class, 'posts_tag_posts');
    }
}
