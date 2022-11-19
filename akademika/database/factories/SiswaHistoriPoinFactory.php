<?php

namespace Database\Factories;

use App\Models\Siswa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SiswaHistoriPoin>
 */
class SiswaHistoriPoinFactory extends Factory
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
            'tipe' => $this->faker->numberBetween(0,1),
            'jumlah' => $this->faker->numberBetween(20,100),
            'tanggal'=>$this->faker->dateTimeBetween("-5 days","now")
        ];
    }
}
