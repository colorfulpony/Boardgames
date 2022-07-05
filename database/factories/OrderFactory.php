<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => rand(1, 11),
            'date_of_order' => $this->faker->dateTimeBetween('-3 months', '-1 months'),
            'delivery_adress' => $this->faker->address(),
            'full_cost' => random_int(1000, 5000),
            'date_of_payment' => $this->faker->dateTimeBetween('-1 months', 'now'),
        ];
    }
}
