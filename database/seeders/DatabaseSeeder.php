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
            'name' => 'Test User',
            'email' => 'test@gmail.com',
            'password' => Hash::make('mak7ka321'),
        ]);
    }
}
