<?php

namespace Database\Factories;

use App\Models\Kursus;
use App\Models\Siswa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SiswaKursus>
 */
class SiswaKursusFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'kursus_id' => $this->faker->randomElement(Kursus::all()->pluck('kursus_id')),
            'siswa_id' => $this->faker->randomElement(Siswa::all()->pluck('siswa_id')),
            'nilai_akhir' => $this->faker->numberBetween(0,100),
            'grade' => $this->faker->randomElement(["A","B","C","D","E"]),
            'keterangan' => $this->faker->text(10),
            'status' => $this->faker->numberBetween(0,1),
        ];
    }
}
