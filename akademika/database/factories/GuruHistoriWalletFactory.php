<?php

namespace Database\Factories;

use App\Models\Guru;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GuruHistoriWallet>
 */
class GuruHistoriWalletFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'guru_id' => $this->faker->randomElement(Guru::all()->pluck('guru_id')),
            'tipe'=> $this->faker->numberBetween(0,1),
            'jumlah' => $this->faker->numberBetween(0,1000),
            'tanggal' => $this->faker->dateTimeBetween("-5 days","now")
        ];
    }
}
