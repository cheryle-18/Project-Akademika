<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Siswa>
 */
class SiswaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $firstname = $this->faker->unique()->firstName();
        $lastname = $this->faker->unique()->lastName();
        return [
            'username' => $this->faker->unique()->userName(),
            'password' => Hash::make('123'),
            'nama' => "$firstname $lastname",
            'email' => Str::lower($firstname).$this->faker->safeEmailDomain(),
            'telp' => $this->faker->unique()->phoneNumber(),
            'poin' => $this->faker->numberBetween(0,1000),
            'status' => $this->faker->numberBetween(0,1),
            'email_verified_at' => $this->faker->dateTimeBetween("-1 years","now")
        ];
    }
}
