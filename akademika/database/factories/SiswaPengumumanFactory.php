<?php

namespace Database\Factories;

use App\Models\Pengumuman;
use App\Models\Siswa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SiswaPengumuman>
 */
class SiswaPengumumanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'pengumuman_id' => $this->faker->randomElement(Pengumuman::all()->pluck('pengumuman_id')),
            'siswa_id' => $this->faker->randomElement(Siswa::all()->pluck('siswa_id')),
            'status' => $this->faker->numberBetween(0,1),
        ];
    }
}
