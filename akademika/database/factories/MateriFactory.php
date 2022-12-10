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
            'link_video' => "12LL_K_AifGQ3tcQooXIWV753IoFs7Ut-",
            'video_name' =>'template',
            'penjelasan' => $this->faker->sentences(20,true),
        ];
    }
}
