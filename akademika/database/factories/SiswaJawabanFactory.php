<?php

namespace Database\Factories;

use App\Models\KuisPilihanJawaban;
use App\Models\KuisSoal;
use App\Models\Siswa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SiswaJawaban>
 */
class SiswaJawabanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'kuis_pilihan_jawaban_id' => $this->faker->randomElement(KuisPilihanJawaban::all()->pluck('kuis_pilihan_jawaban_id')),
            'kuis_soal_id' => $this->faker->randomElement(KuisSoal::all()->pluck('kuis_soal_id')),
            'siswa_id' => $this->faker->randomElement(Siswa::all()->pluck('siswa_id')),
        ];
    }
}
