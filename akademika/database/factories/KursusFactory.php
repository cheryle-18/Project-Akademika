<?php

namespace Database\Factories;

use App\Models\Guru;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kursus>
 */
class KursusFactory extends Factory
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
            'nama' => $this->faker->words(3,true),
            'kategori' => $this->faker->randomElement(['Teknologi Informasi','Logika dan Matematika','Fisika dan Teknik','Kesehatan','Bisnis dan Ekonomi','Bahasa dan Literatur','Pengembangan diri','Kesenian']),
            'deskripsi' => $this->faker->sentences(20,true),
            'durasi'=> $this->faker->numberBetween(500,10000),
            'harga' => $this->faker->numberBetween(0,100000),
            'status'=> $this->faker->numberBetween(0,1),
        ];
    }
}
