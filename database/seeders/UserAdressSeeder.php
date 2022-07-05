<?php

namespace Database\Seeders;

use App\Models\UserAdress;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserAdressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserAdress::factory()->count(20)->create();
    }
}
