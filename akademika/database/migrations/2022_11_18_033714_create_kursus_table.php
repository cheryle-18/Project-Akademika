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
        Schema::create('kursus', function (Blueprint $table) {
            $table->id('kursus_id');
            $table->unsignedBigInteger('guru_id');
            $table->foreign('guru_id')->references
            ('guru_id')->on('guru')->onDelete('cascade');
            $table->string('nama',50);
            $table->string('kategori',50);
            $table->text('deskripsi')->nullable();
            $table->integer('durasi')->nullable();
            $table->integer('harga')->nullable();
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
        Schema::dropIfExists('kursus');
    }
};
