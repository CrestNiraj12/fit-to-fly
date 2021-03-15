<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Option;

class OptionController extends Controller
{
    public function index()
    {
        $options = Option::with('orders')->get();
        return response()->json($options);
    }

    public function store(Request $request) {
         $request->validate([
            'name' => 'required',
            "price"=> 'required',
            "service_id" => 'required',
        ]);

        $option = Option::create($request->all());
        return response()->json(['message'=> 'Option created successfully!', 'option_id' => $option->id]);
    }

    public function show($id) {
        $option = Option::find($id);
        return response()->json($option->load('orders'));
    }

    public function update(Request $request, $id) {
        Option::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Option updated successfully!']);
    }

    public function destroy($id) {
        Option::where('id', $id)->delete();
        return response()->json(['message'=> 'Option deleted successfully!']);
    }
}
