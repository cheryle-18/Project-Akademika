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
        Schema::create('guru', function (Blueprint $table) {
            $table->id('guru_id');
            $table->string('username',50)->unique();
            $table->text('password');
            $table->string('nama',50);
            $table->string('email',50)->unique();
            $table->string('telp',50)->nullable();
            $table->integer('total_wallet')->nullable();
            $table->tinyInteger('status')->default(1);
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
        Schema::dropIfExists('guru');
    }
};
