<?php

namespace Database\Factories;

use App\Models\KuisSoal;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KuisPilihanJawaban>
 */
class KuisPilihanJawabanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'kuis_soal_id' => $this->faker->randomElement(KuisSoal::all()->pluck('kuis_soal_id')),
            'jawaban' =>$this->faker->text(15),
        ];
    }
}
