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
        Schema::create('siswa_laporan', function (Blueprint $table) {
            $table->id('siswa_laporan_id');
            $table->unsignedBigInteger('siswa_id');
            $table->unsignedBigInteger('guru_id');
            $table->foreign('siswa_id')->references
            ('siswa_id')->on('siswa')->onDelete('cascade');
            $table->foreign('guru_id')->references
            ('guru_id')->on('guru')->onDelete('cascade');
            $table->text('deskripsi')->nullable();
            $table->tinyInteger('status');
            $table->text('link_bukti_laporan')->nullable();
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
        Schema::dropIfExists('siswa_laporan');
    }
};
