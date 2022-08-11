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
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('username')->unique();
            $table->text('image')->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->string('street')->nullable();
            $table->string('email')->unique();
            $table->string('role')->default(3);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken()->nullable();
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
        Schema::dropIfExists('users');
    }
};
