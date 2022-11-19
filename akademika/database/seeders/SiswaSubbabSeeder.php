<?php

namespace Database\Seeders;

use App\Models\SiswaSubbab;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SiswaSubbabSeeder extends Seeder
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
        DB::table("siswa_subbab")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        SiswaSubbab::factory()->count(50)->create();
    }
}
