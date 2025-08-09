<?php

namespace App\Http\Controllers;

use App\Models\JbrInfo;
use Illuminate\Http\Request;

class JbrInfoController extends Controller
{
    // List all records
    public function index()
    {
        return response()->json(JbrInfo::all());
    }

    // Store a new record
    public function store(Request $request)
    {
        $validated = $request->validate([
            'last_name' => 'required|string|max:255',
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'alias_nickname' => 'nullable|string|max:255',
            'present_address' => 'nullable|string|max:255',
            'city_prov_address' => 'nullable|string|max:255',
            'telephone_no' => 'nullable|string|max:255',
            'date_of_birth' => 'nullable|date',
            'place_of_birth' => 'nullable|string|max:255',
            'occupation' => 'nullable|string|max:255',
            'nearest_relative' => 'nullable|string|max:255',
            'add_of_relative' => 'nullable|string|max:255',
            'citizenship' => 'nullable|string|max:255',
            'no_of_children' => 'nullable|string|max:255',
            'husband_wife' => 'nullable|string|max:255',
            'occupation_spouse' => 'nullable|string|max:255',
            'address_spouse' => 'nullable|string|max:255',
            'place_of_birth_spouse' => 'nullable|string|max:255',
            'gsis_sss_pagibig_tan_tin_ctc_no' => 'nullable|string|max:255',
            'civil_status' => 'nullable|string|max:255',
            'prison_no' => 'nullable|string|max:255',
            'sex' => 'nullable|string|max:255',
            'age' => 'nullable|string|max:255',
            'race' => 'nullable|string|max:255',
            'hair' => 'nullable|string|max:255',
            'height' => 'nullable|string|max:255',
            'weight' => 'nullable|string|max:255',
            'eyes' => 'nullable|string|max:255',
            'blood_type' => 'nullable|string|max:255',
            'complexion' => 'nullable|string|max:255',
            'build' => 'nullable|string|max:255',
            'religion' => 'nullable|string|max:255',
            'dialect_spoken' => 'nullable|string|max:255',
            'highest_educ_attain' => 'nullable|string|max:255',
            'skills' => 'nullable|string|max:255',
            'gang_affiliation' => 'nullable|string|max:255',
        ]);
        $jbr = JbrInfo::create($validated);
        return response()->json($jbr, 201);
    }

    // Show a single record
    public function show($id)
    {
        $jbr = JbrInfo::findOrFail($id);
        return response()->json($jbr);
    }

    // Update a record
    public function update(Request $request, $id)
    {
        $jbr = JbrInfo::findOrFail($id);
        $jbr->update($request->all());
        return response()->json($jbr);
    }

    // Delete a record
    public function destroy($id)
    {
        $jbr = JbrInfo::findOrFail($id);
        $jbr->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
