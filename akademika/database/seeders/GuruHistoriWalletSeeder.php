<?php

namespace Database\Seeders;

use App\Models\GuruHistoriWallet;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GuruHistoriWalletSeeder extends Seeder
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
        DB::table("guru_histori_wallet")->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");

        GuruHistoriWallet::factory()->count(50)->create();
    }
}
