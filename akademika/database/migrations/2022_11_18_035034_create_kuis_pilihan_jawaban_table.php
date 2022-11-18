<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kuis_pilihan_jawaban', function (Blueprint $table) {
            $table->id('kuis_pilihan_jawaban_id');
            $table->unsignedBigInteger('kuis_soal_id');
            $table->foreign('kuis_soal_id')->references
            ('kuis_soal_id')->on('kuis_soal')->onDelete('cascade');
            $table->text('jawaban');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kuis_pilihan_jawaban');
    }
};
