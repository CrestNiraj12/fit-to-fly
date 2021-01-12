<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::with('orders')->get();
        return response()->json($customers);
    }

    public function store(Request $request) {
         $request->validate([
            "firstname" => 'required',
            "lastname" => 'required',
            "email" => 'required',
            "address" => 'required',
            "country" => 'required',
            "postal" => 'required',
        ]);

        $customer = Customer::create($request->all());
        return response()->json(['message'=> 'Customer created successfully!', 'customer_id' => $customer->id]);
    }

    public function show($id) {
        $customer = Customer::find($id);
        return response()->json($customer->load('orders'));
    }

    public function update(Request $request, $id) {
        Customer::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Customer updated successfully!']);
    }

    public function destroy($id) {
        Customer::where('id', $id)->delete();
        return response()->json(['message'=> 'Customer deleted successfully!']);
    }
}
