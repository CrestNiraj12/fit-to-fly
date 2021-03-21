<?php

namespace App\Http\Controllers;

use App\Models\ServiceOption;
use Illuminate\Http\Request;

class ServiceOptionController extends Controller
{
     public function index()
    {
        $service_option = ServiceOption::with(['service', 'option'])->get();
        return response()->json($service_option);
    }

    public function store(Request $request) {
         $request->validate([
            'service_id' => 'required',
            "location_id"=> 'required',
        ]);

        $service_option = ServiceOption::create($request->all());
        return response()->json(['message'=> 'Service Option created successfully!']);
    }

    public function show($id) {
        $service_option = ServiceOption::find($id);
        return response()->json($service_option->load(['service', 'option']));
    }

    public function update(Request $request, $id) {
        ServiceOption::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Service Option updated successfully!']);
    }

    public function destroy($id) {
        ServiceOption::where('id', $id)->delete();
        return response()->json(['message'=> 'Service Option  deleted successfully!']);
    }
}
