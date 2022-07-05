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
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');
            $table->unsignedBigInteger('product_category_id')->nullable();
            $table->bigInteger('price')->unsigned();
            $table->boolean('available')->default(false);
            $table->integer('sale')->nullable();
            $table->text('description');

            $table->foreign('product_category_id')
                  ->references('id')
                  ->on('product_categories')
                  ->onDelete('cascade');

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
        Schema::dropIfExists('products');
    }
};
