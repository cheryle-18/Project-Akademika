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
        Schema::create('siswa_histori_poin', function (Blueprint $table) {
            $table->id('siswa_histori_poin_id');
            $table->unsignedBigInteger('siswa_id');
            $table->foreign('siswa_id')->references
            ('siswa_id')->on('siswa')->onDelete('cascade');
            $table->tinyInteger('tipe');
            $table->integer('jumlah')->nullable();
            $table->datetime('tanggal');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('siswa_histori_poin');
    }
};
