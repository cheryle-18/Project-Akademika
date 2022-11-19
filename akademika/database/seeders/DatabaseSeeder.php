<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            SiswaSeeder::class,
            GuruSeeder::class,
            KursusSeeder::class,
            SubbabSeeder::class,
            MateriSeeder::class,
            KuisSeeder::class,
            KuisSoalSeeder::class,
            KuisPilihanJawabanSeeder::class,
            SiswaKuisSeeder::class,
            SiswaJawabanSeeder::class,
            PengumumanSeeder::class,
            SiswaPengumumanSeeder::class,
            PesanSeeder::class,
            PendaftaranSeeder::class,
            SiswaKursusSeeder::class,
            SiswaSubbabSeeder::class,
            SiswaHistoriPoinSeeder::class,
            GuruHistoriWalletSeeder::class,
            KursusHistoriSeeder::class,
            SiswaLaporanSeeder::class
        ]);
    }
}
