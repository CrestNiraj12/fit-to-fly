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
            "name" => "Plumstead Pharmacy",
            "openingTime" => "09:00",
            "closingTime" => "12:00",
            "bookedTimes" => "",
            "service_id" => 1
        ]);

        \App\Models\Location::create([
            "name" => "Woolwich Late Night Pharmacy",
            "openingTime" => "07:30",
            "closingTime" => "22:30",
            "bookedTimes" => "",
            "service_id" => 1
        ]);

        \App\Models\Location::create([
            "name" => "Neem Tree Pharmacy",
            "openingTime" => "09:00",
            "closingTime" => "18:00",
            "bookedTimes" => "",
            "service_id" => 1
        ]);
    }
}
