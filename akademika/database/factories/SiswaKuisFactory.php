<?php

namespace Database\Factories;

use App\Models\Kuis;
use App\Models\Siswa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SiswaKuis>
 */
class SiswaKuisFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'kuis_id' => $this->faker->randomElement(Kuis::all()->pluck('kuis_id')),
            'siswa_id' => $this->faker->randomElement(Siswa::all()->pluck('siswa_id')),
            'total_benar' => $this->faker->numberBetween(0,10),
            'total_salah' => $this->faker->numberBetween(0,10),
            'nilai' => $this->faker->numberBetween(0,100)
        ];
    }
}
