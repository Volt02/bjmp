<?php

namespace App\Http\Controllers;

use App\Models\JbrArrestInfo;
use Illuminate\Http\Request;

class JbrArrestInfoController extends Controller
{
    public function index(Request $request)
    {
        if ($request->has('jbr_info_id')) {
            return response()->json(JbrArrestInfo::where('jbr_info_id', $request->jbr_info_id)->get());
        }
        return response()->json(JbrArrestInfo::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'jbr_info_id' => 'required|integer|exists:jbr_info,id',
            'place_of_arrest' => 'nullable|string|max:150',
            'arrest_datetime' => 'nullable|date',
            'arresting_officer' => 'nullable|string|max:150',
            'circumstances' => 'nullable|string|max:150',
            'received_datetime' => 'nullable|date',
        ]);
        $arrest = JbrArrestInfo::create($validated);
        return response()->json($arrest, 201);
    }

    public function show($id)
    {
        $arrest = JbrArrestInfo::findOrFail($id);
        return response()->json($arrest);
    }

    public function update(Request $request, $id)
    {
        $arrest = JbrArrestInfo::findOrFail($id);
        $arrest->update($request->all());
        return response()->json($arrest);
    }

    public function destroy($id)
    {
        $arrest = JbrArrestInfo::findOrFail($id);
        $arrest->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
