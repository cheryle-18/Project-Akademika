<?php

namespace Database\Seeders;

use App\Models\Subbab;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubbabSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET FOREIGN_KEY_CHECKS=0");
        DB::table("subbab")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        Subbab::factory()->count(50)->create();
    }
}
