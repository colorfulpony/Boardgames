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
        $price = random_int(500, 7000);
        $sale = random_int(0, 500);
        $amount = $this->faker->numberBetween(0, 100);
        return [
            'name' => $this->faker->word(),
            'image' => $this->faker->word(),
            'amount' => $amount,
            'product_category_id' => $this->faker->numberBetween(1, 20),
            'price' => $price,
            'sale' => $sale,
            'real_price' => $price - $sale,
            'description' => $this->faker->text(1000, 1500),
            'available' => $amount > 0,
        ];
    }
}
