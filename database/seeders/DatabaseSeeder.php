<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            PostsTagSeeder::class,
            PostSeeder::class,
            PostsTagPostSeeder::class,
            UserAdressSeeder::class,
            UserSeeder::class,
            OrderSeeder::class,
            UserOrderSeeder::class,
            ProductCategorySeeder::class,
            ProductSeeder::class,
        ]);

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@gmail.com',
            'role' => 1,
            'password' => 'mak7ka321',
        ]);

        User::factory()->create([
            'name' => 'Manager User',
            'email' => 'manager@gmail.com',
            'role' => 2,
            'password' => 'mak7ka321',
        ]);

        User::factory()->create([
            'name' => 'Default User',
            'email' => 'default@gmail.com',
            'role' => 3,
            'password' => 'mak7ka321',
        ]);
    }
}
