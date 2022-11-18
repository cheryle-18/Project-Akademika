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
        Schema::create('kursus_histori', function (Blueprint $table) {
            $table->id('kursus_histori_id');
            $table->unsignedBigInteger('kursus_id');
            $table->foreign('kursus_id')->references
            ('kursus_id')->on('kursus')->onDelete('cascade');
            $table->tinyInteger('status');
            $table->text('deskripsi')->nullable();
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
        Schema::dropIfExists('kursus_histori');
    }
};
