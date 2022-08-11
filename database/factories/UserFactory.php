<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'username' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'image' => $this->faker->word(),
            'role' => $this->faker->numberBetween(2, 3),
            'country' => $this->faker->country(),
            'city' => $this->faker->city(),
            'street' => $this->faker->streetAddress(),
            'email_verified_at' => $this->faker->dateTimeBetween('-1 months', 'now'),
            'password' => 'mak7ka321', // password
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
