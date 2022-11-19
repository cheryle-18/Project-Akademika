<?php

namespace Database\Seeders;

use App\Models\KuisPilihanJawaban;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KuisPilihanJawabanSeeder extends Seeder
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
        DB::table("kuis_pilihan_jawaban")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        KuisPilihanJawaban::factory()->count(25)->create();
    }
}
