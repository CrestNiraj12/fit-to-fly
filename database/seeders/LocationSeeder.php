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
            "opening-time" => "09:30",
            "closing-time" => "22:45",
            "booked-times" => "",
            "service_id" => 1
        ]);

        \App\Models\Location::create([
            "name" => "Life Pharmacy Oxford Street",
            "opening-time" => "09:30",
            "closing-time" => "23:00",
            "booked-times" => "09:25,12:30",
            "service_id" => 1
        ]);
    }
}
