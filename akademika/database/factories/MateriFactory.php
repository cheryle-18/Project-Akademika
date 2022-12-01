<?php

namespace Database\Factories;

use App\Models\Subbab;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Materi>
 */
class MateriFactory extends Factory
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
            'link_video' => "1XMjIxq7QnjFn2HeZv7wq7zNyUphHCYJw",
            'penjelasan' => $this->faker->sentences(20,true),
        ];
    }
}
