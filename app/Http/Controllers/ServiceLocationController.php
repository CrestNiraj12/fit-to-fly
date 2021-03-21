<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiceLocation;

class ServiceLocationController extends Controller
{
    public function index()
    {
        $service_location = ServiceLocation::with(['service', 'location'])->get();
        return response()->json($service_location);
    }

    public function store(Request $request) {
         $request->validate([
            'service_id' => 'required',
            "location_id"=> 'required',
        ]);

        $service_location = ServiceLocation::create($request->all());
        return response()->json(['message'=> 'Service Location created successfully!']);
    }

    public function show($id) {
        $service_location = ServiceLocation::find($id);
        return response()->json($service_location->load(['service', 'location']));
    }

    public function update(Request $request, $id) {
        ServiceLocation::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Service Location updated successfully!']);
    }

    public function destroy($id) {
        ServiceLocation::where('id', $id)->delete();
        return response()->json(['message'=> 'Service Location  deleted successfully!']);
    }
}
