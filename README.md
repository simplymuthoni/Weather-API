# Weather Frontend 🌤️

This is the frontend for the Weather App built with **Next.js**, **TypeScript**, **Tailwind CSS**, and optionally **RippleUI**.

It fetches weather data from the Laravel backend API and displays current weather, location info, and forecast.

## 🚀 Features

- 🌍 Search by city or use current geolocation
- ☁️ Display real-time weather and forecast
- 🎨 Styled with Tailwind CSS + RippleUI
- 📱 Responsive design

---

## 🛠 Tech Stack

- Next.js 14+
- TypeScript
- Tailwind CSS
- RippleUI (Optional UI Kit)
- Axios

---

## 📦 Installation

git clone https://github.com/your-username/weather-frontend.git
cd weather-frontend
npm install

⚙️ Environment Setup
Create a .env.local file:
NEXT_PUBLIC_API_URL=http://localhost:8000/api

🧪 Run the Dev Server
npm run dev
Visit: http://localhost:3000

🧼 Linting & Formatting
npm run lint
npm run format

📁 Project Structure
app/
 ┣ components/
 ┣ pages/
 ┣ styles/
 ┣ utils/
 ┗ globals.css

💬 API Communication
Uses Axios to call the backend:

GET /api/weather?city=Nairobi

GET /api/weather?lat=...&lon=...

✅ TODO
 Add error handling for geolocation

 Add charts for forecast trends

 Unit and E2E tests

 Caching API responses

 Add forecast support

 Add location-based suggestions

🧪 API Endpoints
Method	Endpoint	Description
GET	/api/weather?city=Nairobi	Get weather by city name
GET	/api/weather?lat=...&lon=...	Get weather by coordinates

📁 Project Structure
app/
 ┗ Http/
    ┣ Controllers/
    ┗ Services/
routes/
 ┗ api.php
.env

🧼 Code Quality
php artisan lint
php artisan test

