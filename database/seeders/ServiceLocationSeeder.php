<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ServiceLocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\ServiceLocation::create([
            "service_id" => 1,
            "location_id" => 1
        ]);

        \App\Models\ServiceLocation::create([
            "service_id" => 1,
            "location_id" => 2
        ]);

        \App\Models\ServiceLocation::create([
            "service_id" => 1,
            "location_id" => 3
        ]);

        \App\Models\ServiceLocation::create([
            "service_id" => 2,
            "location_id" => 1
        ]);

        \App\Models\ServiceLocation::create([
            "service_id" => 2,
            "location_id" => 2
        ]);

        \App\Models\ServiceLocation::create([
            "service_id" => 2,
            "location_id" => 3
        ]);
    }
}
