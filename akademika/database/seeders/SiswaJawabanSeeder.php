<?php

namespace Database\Seeders;

use App\Models\SiswaJawaban;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SiswaJawabanSeeder extends Seeder
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
        DB::table("siswa_jawaban")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        SiswaJawaban::factory()->count(50)->create();
    }
}
