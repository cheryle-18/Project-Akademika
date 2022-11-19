<?php

namespace Database\Factories;

use App\Models\Guru;
use App\Models\Kursus;
use App\Models\Siswa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pesan>
 */
class PesanFactory extends Factory
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
            'kursus_id' => $this->faker->randomElement(Kursus::all()->pluck('kursus_id')),
            'guru_id' => $this->faker->randomElement(Guru::all()->pluck('guru_id')),
            'isi' => $this->faker->sentences(20,true),
            'tanggal' => $this->faker->dateTimeBetween("-10 days","now")
        ];
    }
}
