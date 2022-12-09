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
        Schema::create('pengumuman', function (Blueprint $table) {
            $table->id('pengumuman_id');
            $table->unsignedBigInteger('kursus_id');
            $table->foreign('kursus_id')->references
            ('kursus_id')->on('kursus')->onDelete('cascade');
            $table->text('deskripsi');
            $table->dateTime('tanggal');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pengumuman');
    }
};
