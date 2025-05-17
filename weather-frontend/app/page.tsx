// app/page.tsx or wherever you render
"use client";

import { useEffect, useState } from "react";
import { Card } from "rippleui";
import { Button } from "rippleui";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("Nairobi");
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/weather?city=${city}`);
      if (!res.ok) throw new Error("Failed to fetch weather");
      const data = await res.json();
      setWeather(data);
      toast.success("Weather updated!");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      toast.error("Failed to fetch weather.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-blue-100">
      <Card className="max-w-md w-full p-6 shadow-xl rounded-2xl bg-white text-center">
        <h1 className="text-2xl font-bold mb-4">🌤️ Weather in{city}</h1>

        {loading ? (
          <div className="flex justify-center items-center gap-2">
            <Loader2 className="animate-spin h-6 w-6 text-blue-500" />
            <span className="text-blue-600">Loading...</span>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : weather ? (
          <div className="space-y-2">
            <p className="text-lg font-semibold">{weather.weather[0].description}</p>
            <p>🌡️ Temperature: {weather.main.temp}°C</p>
            <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
          </div>
        ) : (
          <p>No data</p>
        )}

        <div className="mt-6">
          <Button color="primary" onClick={fetchWeather}>
            Refresh
          </Button>
        </div>
      </Card>
    </main>
  );
}
