<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string("method");
            $table->float("amount");
            $table->string("customer_no");
            $table->unsignedBigInteger("service_id");
            $table->unsignedBigInteger("option_id");
            $table->unsignedBigInteger("location_id");
            $table->foreign('customer_no')->references('passport_no')->on('customers');
            $table->foreign('service_id')->references('id')->on('services');
            $table->foreign('option_id')->references('id')->on('options');
            $table->foreign('location_id')->references('id')->on('locations');
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
        Schema::dropIfExists('orders');
    }
}
