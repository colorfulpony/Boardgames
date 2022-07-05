<?php

namespace Database\Seeders;

use App\Models\PostsTag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostsTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PostsTag::factory()->count(10)->create();
    }
}
