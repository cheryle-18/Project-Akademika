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
        Schema::create('siswa_jawaban', function (Blueprint $table) {
            $table->id('siswa_jawaban_id');
            $table->unsignedBigInteger('kuis_pilihan_jawaban_id');
            $table->unsignedBigInteger('kuis_soal_id');
            $table->unsignedBigInteger('siswa_id');
            $table->foreign('kuis_pilihan_jawaban_id')->references
            ('kuis_pilihan_jawaban_id')->on('kuis_pilihan_jawaban')->onDelete('cascade');
            $table->foreign('kuis_soal_id')->references
            ('kuis_soal_id')->on('kuis_soal')->onDelete('cascade');
            $table->foreign('siswa_id')->references
            ('siswa_id')->on('siswa')->onDelete('cascade');
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
        Schema::dropIfExists('siswa_jawaban');
    }
};
