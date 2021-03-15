<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Option::create([
            "name" => "Results within 24 hrs",
            "price" => 150.00,
            "service_id" => 1
        ]);

        \App\Models\Option::create([
            "name" => "Results within 24 hrs + swab done by staff",
            "price" => 160.00,
            "service_id" => 1
        ]);

        \App\Models\Option::create([
            "name" => "Results within 4 hrs",
            "price" => 350.00,
            "service_id" => 1
        ]);
    }
}
