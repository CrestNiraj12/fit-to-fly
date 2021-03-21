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
            "passport_no" => 'required',
            "dob" => 'required',
            "firstname" => 'required',
            "lastname" => 'required',
            "email" => 'required',
            "address" => 'required',
            "country" => 'required',
            "postal" => 'required',
        ]);

        $customer = Customer::create($request->all());
        return response()->json(['message'=> 'Customer created successfully!', 'customer_no' => $customer->passport_no]);
    }

    public function show($passport_no) {
        $customer = Customer::find($passport_no);
        return $customer ? response()->json($customer->load('orders')) : response()->json(0);
    }

    public function update(Request $request, $passport_no) {
        Customer::where('passport_no', $passport_no)->update($request->all());
        return response()->json(['message'=> 'Customer updated successfully!']);
    }

    public function destroy($passport_no) {
        Customer::where('customer_nhs_no', $passport_no)->delete();
        return response()->json(['message'=> 'Customer deleted successfully!']);
    }
}
