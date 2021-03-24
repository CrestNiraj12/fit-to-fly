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
            "name" => "Plumstead Pharmacy, Plumstead",
            "openingTime" => "09:00-14:00,09:00",
            "closingTime" => "12:00-18:00,13:00",
            "bookedTimes" => ""
        ]);

        \App\Models\Location::create([
            "name" => "Woolwich Late Night Pharmacy, Woolwich",
            "openingTime" => "07:30,08:00,08:00",
            "closingTime" => "22:30,21:00,20:00",
            "bookedTimes" => ""
        ]);

        \App\Models\Location::create([
            "name" => "Neem Tree Pharmacy, Abbey Wood",
            "openingTime" => "09:00,09:00",
            "closingTime" => "18:00,13:00",
            "bookedTimes" => ""
        ]);
    }
}
