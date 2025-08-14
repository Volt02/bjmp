<?php

namespace App\Http\Controllers;

use App\Models\JbrParent;
use Illuminate\Http\Request;

class JbrParentController extends Controller
{
    public function index(Request $request)
    {
        if ($request->has('jbr_info_id')) {
            return response()->json(JbrParent::where('jbr_info_id', $request->jbr_info_id)->get());
        }
        return response()->json(JbrParent::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'jbr_info_id' => 'required|integer|exists:jbr_info,id',
            'father_name' => 'nullable|string|max:100',
            'father_place_of_birth' => 'nullable|string|max:200',
            'father_occupation' => 'nullable|string|max:100',
            'father_address' => 'nullable|string|max:200',
            'mother_name' => 'nullable|string|max:100',
            'mother_place_of_birth' => 'nullable|string|max:200',
            'mother_occupation' => 'nullable|string|max:100',
            'mother_address' => 'nullable|string|max:200',
        ]);
        $parent = JbrParent::create($validated);
        return response()->json($parent, 201);
    }

    public function show($id)
    {
        $parent = JbrParent::findOrFail($id);
        return response()->json($parent);
    }

    public function update(Request $request, $id)
    {
        $parent = JbrParent::findOrFail($id);
        $parent->update($request->all());
        return response()->json($parent);
    }

    public function destroy($id)
    {
        $parent = JbrParent::findOrFail($id);
        $parent->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
