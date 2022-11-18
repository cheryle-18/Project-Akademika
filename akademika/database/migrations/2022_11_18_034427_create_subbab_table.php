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
        Schema::create('subbab', function (Blueprint $table) {
            $table->id('subbab_id');
            $table->unsignedBigInteger('kursus_id');
            $table->foreign('kursus_id')->references
            ('kursus_id')->on('kursus')->onDelete('cascade');
            $table->string('judul',255);
            $table->text('deskripsi')->nullable();
            $table->integer('durasi')->nullable();
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
        Schema::dropIfExists('subbab');
    }
};
