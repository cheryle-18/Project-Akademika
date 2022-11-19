<?php

namespace Database\Factories;

use App\Models\Subbab;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kuis>
 */
class KuisFactory extends Factory
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
            'jumlah_soal' =>$this->faker->numberBetween(5,20),
        ];
    }
}
