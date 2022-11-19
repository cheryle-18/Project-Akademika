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
        Schema::create('siswa_kuis', function (Blueprint $table) {
            $table->id('siswa_kuis_id');
            $table->unsignedBigInteger('kuis_id');
            $table->unsignedBigInteger('siswa_id');
            $table->foreign('kuis_id')->references
            ('kuis_id')->on('kuis')->onDelete('cascade');
            $table->foreign('siswa_id')->references
            ('siswa_id')->on('siswa')->onDelete('cascade');
            $table->integer('total_benar');
            $table->integer('total_salah');
            $table->integer('nilai');
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
        Schema::dropIfExists('siswa_kuis');
    }
};
