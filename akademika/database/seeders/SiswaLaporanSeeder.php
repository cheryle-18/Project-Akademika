<?php

namespace Database\Seeders;

use App\Models\SiswaLaporan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SiswaLaporanSeeder extends Seeder
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
        DB::table("siswa_laporan")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        SiswaLaporan::factory()->count(50)->create();

    }
}
