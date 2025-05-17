'use client';

import { useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/weather?city=${city}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong');
        setWeather(null);
        return;
      }
      setError(null);
      setWeather(data);
    } catch (err) {
      setError('Failed to connect to server');
      setWeather(null);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h1 className="text-xl font-bold mb-4">Weather Finder 🌦️</h1>
        <input
          type="text"
          placeholder="Enter city"
          className="input input-bordered w-full mb-4"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary w-full" onClick={fetchWeather}>
          Get Weather
        </button>

        {error && <p className="text-error mt-4">{error}</p>}

        {weather && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold">{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>🌡️ Temp: {weather.main.temp}°C</p>
            <p>💨 Wind: {weather.wind.speed} m/s</p>
            <p>🌅 Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>🌇 Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
          </div>
        )}
      </div>
    </main>
  );
}
