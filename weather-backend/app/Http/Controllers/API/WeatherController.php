<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function fetch(Request $request)
    {
        $city = $request->query('city', 'Nairobi');
        $apiKey = env('OPENWEATHER_API_KEY');

        $response = Http::get('https://api.openweathermap.org/data/2.5/weather', [
            'q' => $city,
            'appid' => $apiKey,
            'units' => 'metric' // or 'imperial' for Fahrenheit
        ]);

        if ($response->failed()) {
            return response()->json([
                'error' => 'Failed to fetch weather data.'
            ], $response->status());
        }

        return response()->json($response->json());
    }
}
