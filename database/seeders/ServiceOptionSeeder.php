<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ServiceOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\ServiceOption::create([
            "service_id" => 1,
            "option_id" => 1
        ]);

        \App\Models\ServiceOption::create([
            "service_id" => 1,
            "option_id" => 2
        ]);

        \App\Models\ServiceOption::create([
            "service_id" => 1,
            "option_id" => 3
        ]);

        \App\Models\ServiceOption::create([
            "service_id" => 1,
            "option_id" => 4
        ]);

        \App\Models\ServiceOption::create([
            "service_id" => 1,
            "option_id" => 5
        ]);

        \App\Models\ServiceOption::create([
            "service_id" => 2,
            "option_id" => 1
        ]);

        \App\Models\ServiceOption::create([
            "service_id" => 2,
            "option_id" => 2
        ]);

        \App\Models\ServiceOption::create([
            "service_id" => 2,
            "option_id" => 3
        ]);

         \App\Models\ServiceOption::create([
            "service_id" => 2,
            "option_id" => 4
        ]);

         \App\Models\ServiceOption::create([
            "service_id" => 2,
            "option_id" => 5
        ]);

    }
}
