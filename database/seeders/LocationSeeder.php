<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Location::create([
            "name" => "Life Pharmacy Brompton Road",
            "openingTime" => "09:30",
            "closingTime" => "22:45",
            "bookedTimes" => "",
            "service_id" => 1
        ]);

        \App\Models\Location::create([
            "name" => "Life Pharmacy Oxford Street",
            "openingTime" => "09:30",
            "closingTime" => "23:00",
            "bookedTimes" => "",
            "service_id" => 1
        ]);
    }
}
