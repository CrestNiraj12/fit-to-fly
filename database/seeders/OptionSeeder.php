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
            "name" => "Next day results (tests before 3pm)",
            "price" => 145.00
        ]);

        \App\Models\Option::create([
            "name" => "Next day results (tests before 3pm) + £20 swab",
            "price" => 165.00
        ]);

        \App\Models\Option::create([
            "name" => "Same-day results (tests before 11:30am)",
            "price" => 165.00
        ]);

        \App\Models\Option::create([
            "name" => "Next day results (tests before 3pm) + £20 swab",
            "price" => 185.00
        ]);

        \App\Models\Option::create([
            "name" => "Results within 4 hours (tests before 5pm)",
            "price" => 350.00
        ]);
    }
}
