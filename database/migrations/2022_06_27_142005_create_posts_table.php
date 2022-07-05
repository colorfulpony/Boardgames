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
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('user_id')->unsigned();

            $table->string('title');
            $table->string('slug')->unique();

            $table->text('description');
            $table->string('image_name');

            $table->boolean('is_published')->default(false);
            $table->timestamp('published_at')->nullable();

            $table->unsignedBigInteger('posts_tag_id');
            $table->foreign('posts_tag_id')->references('id')->on('posts_tags')->onDelete('cascade');

            $table->timestamps();
            $table->softDeletes();

            $table->index('is_published');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
