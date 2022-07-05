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
        Schema::create('posts_tag_posts', function (Blueprint $table) {
            $table->unsignedBigInteger('posts_tag_id');
            $table->unsignedBigInteger('post_id');

            $table->foreign('posts_tag_id')
                  ->references('id')
                  ->on('posts_tags')
                  ->onDelete('cascade');

            $table->foreign('post_id')
                  ->references('id')
                  ->on('posts')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts_tag_posts');
    }
};
