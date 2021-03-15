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
            "nhs_no" => 'required',
            "firstname" => 'required',
            "lastname" => 'required',
            "email" => 'required',
            "address" => 'required',
            "country" => 'required',
            "postal" => 'required',
        ]);

        $customer = Customer::create($request->all());
        return response()->json(['message'=> 'Customer created successfully!', 'nhs_no' => $customer->nhs_no]);
    }

    public function show($nhs_no) {
        $customer = Customer::find($nhs_no);
        return response()->json($customer->load('orders'));
    }

    public function update(Request $request, $nhs_no) {
        Customer::where('nhs_no', $nhs_no)->update($request->all());
        return response()->json(['message'=> 'Customer updated successfully!']);
    }

    public function destroy($nhs_no) {
        Customer::where('nhs_no', $nhs_no)->delete();
        return response()->json(['message'=> 'Customer deleted successfully!']);
    }
}
