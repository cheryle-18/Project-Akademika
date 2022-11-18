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
        Schema::create('siswa_pengumuman', function (Blueprint $table) {
            $table->id('siswa_pengumuman_id');
            $table->unsignedBigInteger('pengumuman_id');
            $table->unsignedBigInteger('siswa_id');
            $table->foreign('pengumuman_id')->references
            ('pengumuman_id')->on('pengumuman')->onDelete('cascade');
            $table->foreign('siswa_id')->references
            ('siswa_id')->on('siswa')->onDelete('cascade');
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
        Schema::dropIfExists('siswa_pengumuman');
    }
};
