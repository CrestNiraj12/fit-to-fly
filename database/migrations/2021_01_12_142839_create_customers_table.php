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
            $table->string("customer_nhs_no");
            $table->string("firstname");
            $table->string("lastname");
            $table->string("email");
            $table->string("address");
            $table->string("address2");
            $table->string("country");
            $table->string("postal");
            $table->timestamps();
            $table->primary("customer_nhs_no");
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
