<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Location;

class LocationController extends Controller
{
    public function index()
    {
        $locations = Location::with(['services', 'orders'])->get();
        return response()->json($locations);
    }

    public function store(Request $request) {
         $request->validate([
            'name' => 'required',
            "openingTime"=> 'required',
            "closingTime"=> 'required',
            "bookedTimes"=> 'required',
        ]);

        $location = Location::create($request->all());
        return response()->json(['message'=> 'Location created successfully!']);
    }

    public function show($id) {
        $location = Location::find($id);
        return response()->json($location->load(['services', 'orders']));
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
