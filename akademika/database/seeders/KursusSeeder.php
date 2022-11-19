<?php

namespace Database\Seeders;

use App\Models\Kursus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KursusSeeder extends Seeder
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
        DB::table("kursus")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        Kursus::factory()->count(50)->create();
    }
}
