<?php

namespace Database\Factories;

use App\Models\Kursus;
use App\Models\Siswa;
use App\Models\Subbab;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SiswaSubbab>
 */
class SiswaSubbabFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'subbab_id' => $this->faker->randomElement(Subbab::all()->pluck('subbab_id')),
            'siswa_id' => $this->faker->randomElement(Siswa::all()->pluck('siswa_id')),
            'kursus_id' => $this->faker->randomElement(Kursus::all()->pluck('kursus_id')),
            'status' => $this->faker->numberBetween(0,1),
        ];
    }
}
