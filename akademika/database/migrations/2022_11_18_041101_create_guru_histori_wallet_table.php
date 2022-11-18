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
        Schema::create('guru_histori_wallet', function (Blueprint $table) {
            $table->id('guru_histori_wallet_id');
            $table->unsignedBigInteger('guru_id');
            $table->foreign('guru_id')->references
            ('guru_id')->on('guru')->onDelete('cascade');
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
        Schema::dropIfExists('guru_histori_wallet');
    }
};
