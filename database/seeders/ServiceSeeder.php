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
            "name" => "PCR Test Fit to Fly"
        ]);

        \App\Models\Service::create([
            "name" => "PCR Test to Release"
        ]);
    }
}
