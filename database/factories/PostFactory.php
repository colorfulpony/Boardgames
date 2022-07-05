<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $title = $this->faker->unique()->word();
        $isPublished = rand(1, 5) > 1;
        return [
            'user_id' => rand(1, 10),
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => $this->faker->realText(),
            'image_name' => $this->faker->word(),
            'is_published' => $isPublished ,
            'posts_tag_id' => $this->faker->numberBetween(1, 10),
            'published_at' => $isPublished ? $this->faker->dateTimeBetween('-2 months', '-1 days') : null,
        ];
    }
}
