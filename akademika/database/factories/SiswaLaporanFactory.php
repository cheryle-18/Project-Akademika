<?php

namespace Database\Factories;

use App\Models\Guru;
use App\Models\Siswa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SiswaLaporan>
 */
class SiswaLaporanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'siswa_id' => $this->faker->randomElement(Siswa::all()->pluck('siswa_id')),
            'guru_id' => $this->faker->randomElement(Guru::all()->pluck('guru_id')),
            'deskripsi' => $this->faker->sentences(20,true),
            'status' => $this->faker->numberBetween(0,1),
            'link_bukti_laporan' => "https://drive.google.com/drive/folders/".$this->faker->text(50),
        ];
    }
}
