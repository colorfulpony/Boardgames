<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostsTag extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function posts()
    {
        return $this->belongsToMany(Posts::class, 'posts_tag_posts');
    }
}
