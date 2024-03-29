<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with(['customer', 'service', 'option', 'location'])->get();
        return response()->json($orders);
    }

    public function store(Request $request) {
         $request->validate([
            'method' => 'required',
            "amount"=> 'required',
            "customer_no" => 'required',
            "service_id" => 'required',
            "option_id" => 'required',
            "location_id" => "required"
        ]);

        $order = Order::create($request->all());
        return response()->json(['message'=> 'Order created successfully!']);
    }

    public function show($id) {
        $order = Order::find($id);
        return response()->json($order->load(['customer', 'service', 'option', 'location']));
    }

    public function update(Request $request, $id) {
        Order::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Order updated successfully!']);
    }

    public function destroy($id) {
        Order::where('id', $id)->delete();
        return response()->json(['message'=> 'Order deleted successfully!']);
    }
}
