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
        Schema::create('kuis_soal', function (Blueprint $table) {
            $table->id('kuis_soal_id');
            $table->unsignedBigInteger('kuis_id');
            $table->foreign('kuis_id')->references
            ('kuis_id')->on('kuis')->onDelete('cascade');
            $table->text('soal');
            $table->text('kunci_jawaban');
            $table->text('pembahasan');
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
        Schema::dropIfExists('kuis_soal');
    }
};
