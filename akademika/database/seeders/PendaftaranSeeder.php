<?php

namespace Database\Seeders;

use App\Models\Pendaftaran;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PendaftaranSeeder extends Seeder
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
        DB::table("pendaftaran")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        Pendaftaran::factory()->count(50)->create();
    }
}
