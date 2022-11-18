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
        Schema::create('pesan', function (Blueprint $table) {
            $table->id('pesan_id');
            $table->unsignedBigInteger('siswa_id');
            $table->unsignedBigInteger('kursus_id');
            $table->unsignedBigInteger('guru_id');
            $table->foreign('siswa_id')->references
            ('siswa_id')->on('siswa')->onDelete('cascade');
            $table->foreign('kursus_id')->references
            ('kursus_id')->on('kursus')->onDelete('cascade');
            $table->foreign('guru_id')->references
            ('guru_id')->on('guru')->onDelete('cascade');
            $table->text('isi');
            $table->dateTime('tanggal');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pesan');
    }
};
