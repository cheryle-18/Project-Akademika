<?php

namespace Database\Seeders;

use App\Models\KursusHistori;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KursusHistoriSeeder extends Seeder
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
        DB::table("kursus_histori")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        KursusHistori::factory()->count(20)->create();
    }
}
