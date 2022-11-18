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
        Schema::create('siswa', function (Blueprint $table) {
            $table->id('siswa_id');
            $table->string('username',50)->unique();
            $table->string('password',50);
            $table->string('nama',50);
            $table->string('email',50)->unique();
            $table->string('telp',15)->nullable();
            $table->integer('poin')->nullable();
            $table->tinyInteger('status');
            $table->dateTime('email_verified_at')->nullable();
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
        Schema::dropIfExists('siswa');
    }
};
