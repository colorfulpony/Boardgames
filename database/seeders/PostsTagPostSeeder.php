<?php

namespace Database\Seeders;

use App\Models\PostsTagPost;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostsTagPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PostsTagPost::factory()->count(10)->create();
    }
}
