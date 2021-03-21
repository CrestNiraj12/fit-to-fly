<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->string("passport_no");
            $table->date("dob");
            $table->string("firstname");
            $table->string("lastname");
            $table->string("email");
            $table->string("address");
            $table->string("address2")->nullable();
            $table->string("country");
            $table->string("postal");
            $table->timestamps();
            $table->primary("passport_no");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
