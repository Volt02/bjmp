<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JbrInfoController;

Route::apiResource('jbr-info', JbrInfoController::class);

Route::get('/greeting', function () {
    return response()->json(['message' => 'Hello from Laravel!']);
});
