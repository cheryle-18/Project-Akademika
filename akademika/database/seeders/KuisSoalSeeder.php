<?php

namespace Database\Seeders;

use App\Models\KuisSoal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KuisSoalSeeder extends Seeder
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
        DB::table("kuis_soal")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        KuisSoal::factory()->count(20)->create();
    }
}
