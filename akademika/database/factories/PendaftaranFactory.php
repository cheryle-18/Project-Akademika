<?php

namespace Database\Factories;

use App\Models\Kursus;
use App\Models\Siswa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pendaftaran>
 */
class PendaftaranFactory extends Factory
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
            'total' => $this->faker->numberBetween(0,100000),
            'diskon' => $this->faker->numberBetween(0,30),
            'grand_total' => $this->faker->numberBetween(0,100000),
            'cara_bayar' =>  $this->faker->numberBetween(0,1),
            'status' =>  $this->faker->numberBetween(0,2),
        ];
    }
}
