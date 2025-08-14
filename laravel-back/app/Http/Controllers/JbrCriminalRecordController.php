<?php

namespace App\Http\Controllers;

use App\Models\JbrCriminalRecord;
use Illuminate\Http\Request;

class JbrCriminalRecordController extends Controller
{
    public function index(Request $request)
    {
        if ($request->has('jbr_info_id')) {
            return response()->json(JbrCriminalRecord::where('jbr_info_id', $request->jbr_info_id)->get());
        }
        return response()->json(JbrCriminalRecord::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'jbr_info_id' => 'required|integer|exists:jbr_info,id',
            'records' => 'required|array|min:1',
            'records.*.case_no' => 'nullable|string|max:100',
            'records.*.offense' => 'nullable|string|max:150',
            'records.*.court' => 'nullable|string|max:150',
            'records.*.sentence' => 'nullable|string|max:150',
            'records.*.date_arrested' => 'nullable|date',
            'records.*.date_released' => 'nullable|date',
            'records.*.authority_release' => 'nullable|string|max:150',
        ]);
        $created = [];
        foreach ($validated['records'] as $rec) {
            $created[] = JbrCriminalRecord::create([
                'jbr_info_id' => $validated['jbr_info_id'],
                'case_no' => $rec['case_no'] ?? null,
                'offense' => $rec['offense'] ?? null,
                'court' => $rec['court'] ?? null,
                'sentence' => $rec['sentence'] ?? null,
                'date_arrested' => $rec['date_arrested'] ?? null,
                'date_released' => $rec['date_released'] ?? null,
                'authority_release' => $rec['authority_release'] ?? null,
            ]);
        }
        return response()->json($created, 201);
    }

    public function show($id)
    {
        $rec = JbrCriminalRecord::findOrFail($id);
        return response()->json($rec);
    }

    public function update(Request $request, $id)
    {
        $rec = JbrCriminalRecord::findOrFail($id);
        $rec->update($request->all());
        return response()->json($rec);
    }

    public function destroy($id)
    {
        $rec = JbrCriminalRecord::findOrFail($id);
        $rec->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
