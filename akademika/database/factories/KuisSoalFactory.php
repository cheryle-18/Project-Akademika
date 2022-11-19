<?php

namespace Database\Factories;

use App\Models\Kuis;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KuisSoal>
 */
class KuisSoalFactory extends Factory
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
            'soal' =>$this->faker->text(20)."?",
            'kunci_jawaban'=>$this->faker->word(5),
            'pembahasan'=>$this->faker->sentence(10),
            'nilai'=> $this->faker->numberBetween(5,10)
        ];
    }
}
