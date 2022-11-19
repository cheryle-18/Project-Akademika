<?php

namespace Database\Seeders;

use App\Models\SiswaHistoriPoin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SiswaHistoriPoinSeeder extends Seeder
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
        DB::table("siswa_histori_poin")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");
        SiswaHistoriPoin::factory()->count(50)->create();
    }
}
