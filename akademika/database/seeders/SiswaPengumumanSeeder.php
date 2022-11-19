<?php

namespace Database\Seeders;

use App\Models\SiswaPengumuman;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SiswaPengumumanSeeder extends Seeder
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
        DB::table("siswa_pengumuman")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        SiswaPengumuman::factory()->count(50)->create();
    }
}
