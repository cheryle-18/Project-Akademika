<?php

namespace Database\Seeders;

use App\Models\Kuis;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KuisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::statement("SET FOREIGN_KEY_CHECKS=0");
        DB::table("kuis")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        Kuis::factory()->count(20)->create();
    }
}
