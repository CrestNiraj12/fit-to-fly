<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          \App\Models\Service::create([
            "name" => "LIFE Pharmacy COVID-19 PCR Test + Fit to Fly Certificate",
            "price" => 99.00
        ]);
    }
}