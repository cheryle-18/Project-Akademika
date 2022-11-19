<?php

namespace Database\Seeders;

use App\Models\SiswaKursus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SiswaKursusSeeder extends Seeder
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
        DB::table("siswa_kursus")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        SiswaKursus::factory()->count(50)->create();
    }
}
