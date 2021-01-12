<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $services =  Service::with('locations')->get();
        return response()->json($services);
    }

    public function store(Request $request) {
         $request->validate([
            'name' => 'required',
            'locations' => 'required',
            'price' => 'required'
        ]);

        $service = Service::create($request->all());
        return response()->json(['message'=> 'Service created successfully!']);
    }

    public function show($id) {
        $service = Service::find($id);
        return response()->json($service->load('locations'));
    }

    public function update(Request $request, $id) {
        Service::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Service updated successfully!']);
    }

    public function destroy($id) {
        Service::where('id', $id)->delete();
        return response()->json(['message'=> 'Service deleted successfully!']);
    }
}
