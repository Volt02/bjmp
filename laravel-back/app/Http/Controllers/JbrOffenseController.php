<?php

namespace App\Http\Controllers;

use App\Models\JbrOffense;
use Illuminate\Http\Request;

class JbrOffenseController extends Controller
{
    // List all offenses (optionally filter by jbr_info_id)
    public function index(Request $request)
    {
        if ($request->has('jbr_info_id')) {
            return response()->json(JbrOffense::where('jbr_info_id', $request->jbr_info_id)->get());
        }
        return response()->json(JbrOffense::all());
    }

    // Store new offense(s)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'jbr_info_id' => 'required|integer|exists:jbr_info,id',
            'offenses' => 'required|array|min:1',
            'offenses.*.case_no' => 'nullable|string|max:100',
            'offenses.*.offense_charged' => 'nullable|string|max:100',
            'court_origin' => 'nullable|string|max:150',
        ]);

        $created = [];
        foreach ($validated['offenses'] as $offense) {
            $created[] = JbrOffense::create([
                'jbr_info_id' => $validated['jbr_info_id'],
                'case_no' => $offense['case_no'] ?? null,
                'offense_charged' => $offense['offense_charged'] ?? null,
                'court_origin' => $validated['court_origin'] ?? null,
            ]);
        }
        return response()->json($created, 201);
    }

    // Show a single offense
    public function show($id)
    {
        $offense = JbrOffense::findOrFail($id);
        return response()->json($offense);
    }

    // Update an offense
    public function update(Request $request, $id)
    {
        $offense = JbrOffense::findOrFail($id);
        $offense->update($request->all());
        return response()->json($offense);
    }

    // Delete an offense
    public function destroy($id)
    {
        $offense = JbrOffense::findOrFail($id);
        $offense->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
