<?php

namespace Database\Factories;

use App\Models\Kursus;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subbab>
 */
class SubbabFactory extends Factory
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
            'judul' => $this->faker->words(3,true),
            'deskripsi' => $this->faker->sentences(20,true),
            'durasi'=> $this->faker->numberBetween(100,190),
        ];
    }
}
