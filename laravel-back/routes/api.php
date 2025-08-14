<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JbrInfoController;
use App\Http\Controllers\JbrOffenseController;

Route::apiResource('jbr-info', JbrInfoController::class);
Route::apiResource('jbr-offenses', JbrOffenseController::class);

use App\Http\Controllers\JbrParentController;
use App\Http\Controllers\JbrArrestInfoController;
use App\Http\Controllers\JbrCriminalRecordController;

Route::apiResource('jbr-parents', JbrParentController::class);
Route::apiResource('jbr-arrest-info', JbrArrestInfoController::class);
Route::apiResource('jbr-criminal-records', JbrCriminalRecordController::class);

Route::get('/greeting', function () {
    return response()->json(['message' => 'Hello from Laravel!']);
});
