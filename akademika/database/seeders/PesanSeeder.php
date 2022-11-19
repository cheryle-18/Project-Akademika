<?php

namespace Database\Seeders;

use App\Models\Pesan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PesanSeeder extends Seeder
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
        DB::table("pesan")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");
        Pesan::factory()->count(50)->create();
    }
}
