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
        Schema::create('siswa_subbab', function (Blueprint $table) {
            $table->id('siswa_subbab_id');
            $table->unsignedBigInteger('subbab_id');
            $table->unsignedBigInteger('siswa_id');
            $table->unsignedBigInteger('kursus_id');
            $table->foreign('subbab_id')->references
            ('subbab_id')->on('subbab')->onDelete('cascade');
            $table->foreign('siswa_id')->references
            ('siswa_id')->on('siswa')->onDelete('cascade');
            $table->foreign('kursus_id')->references
            ('kursus_id')->on('kursus')->onDelete('cascade');
            $table->tinyInteger('status');
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
        Schema::dropIfExists('siswa_subbab');
    }
};
