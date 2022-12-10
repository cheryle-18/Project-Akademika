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
        Schema::create('materi', function (Blueprint $table) {
            $table->id('materi_id');
            $table->unsignedBigInteger('subbab_id');
            $table->foreign('subbab_id')->references
            ('subbab_id')->on('subbab')->onDelete('cascade');
            $table->text('link_video')->nullable();
            $table->text('video_name')->nullable();
            $table->text('penjelasan')->nullable();
            $table->timestamps();
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
        Schema::dropIfExists('materi');
    }
};
