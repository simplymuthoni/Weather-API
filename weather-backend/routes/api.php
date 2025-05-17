<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\WeatherController;

Route::get('api/weather', [WeatherController::class, 'fetch']);

Route::get('/ping', function () {
    return response()->json(['message' => 'pong']);
});
