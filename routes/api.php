<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CustomerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/stripe/pay', [StripeController::class, 'paymentProcess']);
Route::post('/stripe/session', [StripeController::class, 'retrieveSession']);

Route::resource('services', ServiceController::class);
Route::resource('locations', LocationController::class);
Route::resource('orders', OrderController::class);
Route::resource('customers', CustomerController::class);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
