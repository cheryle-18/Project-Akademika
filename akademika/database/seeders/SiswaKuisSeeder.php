<?php

namespace Database\Seeders;

use App\Models\SiswaKuis;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SiswaKuisSeeder extends Seeder
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
        DB::table("siswa_kuis")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        SiswaKuis::factory()->count(50)->create();
    }
}
