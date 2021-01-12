<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Location;

class LocationController extends Controller
{
    public function index()
    {
        $locations = Location::all();
        return response()->json($locations);
    }

    public function store(Request $request) {
         $request->validate([
            'name' => 'required',
            "opening-time"=> 'required',
            "closing-time"=> 'required',
            "booked-times"=> 'required',
            "service_id" => 'required',
        ]);

        $location = Location::create($request->all());
        return response()->json(['message'=> 'Location created successfully!']);
    }

    public function show($id) {
        $location = Location::find($id);
        return response()->json($location);
    }

    public function update(Request $request, $id) {
        Location::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Location updated successfully!']);
    }

    public function destroy($id) {
        Location::where('id', $id)->delete();
        return response()->json(['message'=> 'Location deleted successfully!']);
    }
}
