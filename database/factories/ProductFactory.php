<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'image' => $this->faker->word(),
            'product_category_id' => $this->faker->numberBetween(1, 20),
            'price' => random_int(500, 7000),
            'available' => rand(1, 2) > 1,
            'sale' => random_int(0, 500),
            'description' => $this->faker->text(1000, 1500),
        ];
    }
}
