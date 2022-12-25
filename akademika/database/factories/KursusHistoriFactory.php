<?php

namespace Database\Factories;

use App\Models\Kursus;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KursusHistori>
 */
class KursusHistoriFactory extends Factory
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
            'status' =>  $this->faker->numberBetween(1,3),
            'deskripsi' => $this->faker->sentences(20,true),
            'tanggal' => $this->faker->dateTimeBetween("-1 years","now")
        ];
    }
}
