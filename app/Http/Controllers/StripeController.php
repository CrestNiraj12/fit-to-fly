<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StripeController extends Controller
{
    public function paymentProcess(Request $request) {
        $service = $request->service;
        $service = mb_convert_encoding($service,'UTF-8','UTF-8');
        $session = \Stripe\Checkout\Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [json_decode(str_replace("'",'"', $service), true)],
            'mode' => 'payment',
            'success_url' => "http://localhost:8080/success/?session_id={CHECKOUT_SESSION_ID}&method=stripe",
            'cancel_url' => 'http://localhost:8080/cancel'
        ]);
        return response()->json($session->id);
    }

    public function retrieveSession(Request $request) {
        $sessionId = $request->sessionId;
        $session = \Stripe\Checkout\Session::retrieve($sessionId);
        return response()->json($session);
    }
}
