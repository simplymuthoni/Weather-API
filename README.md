
# Weather App ☁️🌤️

A full-stack weather application built with **Next.js** (frontend) and **Laravel** (backend). It allows users to search weather conditions by city or geolocation.

---

## 📦 Repositories

- **Frontend:** `weather-frontend` – [Next.js, Tailwind CSS, RippleUI]
- **Backend:** `weather-backend` – [Laravel, OpenWeatherMap API]

---

## 🌐 Weather Frontend

### 🚀 Features

- 🌍 Search weather by city or geolocation
- ☁️ Real-time weather and forecast
- 🎨 Styled with Tailwind CSS + RippleUI
- 📱 Fully responsive

### 🛠 Tech Stack

- Next.js 14+
- TypeScript
- Tailwind CSS
- RippleUI (optional)
- Axios

### 📦 Installation

```bash
git clone https://github.com/your-username/weather-frontend.git
cd weather-frontend
npm install
````

### ⚙️ Environment Setup

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### 🧪 Run the Dev Server

```bash
npm run dev
```

Visit: `http://localhost:3000`

### 🧼 Linting & Formatting

```bash
npm run lint
npm run format
```

### 📁 Project Structure

```
weather-frontend/
 ┣ app/
 ┃ ┣ components/
 ┃ ┣ pages/
 ┃ ┣ styles/
 ┃ ┣ utils/
 ┃ ┗ globals.css
 ┣ .env.local
 ┣ tailwind.config.ts
 ┣ next.config.js
```

### 💬 API Communication

* `GET /api/weather?city=Nairobi`
* `GET /api/weather?lat=...&lon=...`

---

## 🖥️ Weather Backend (Laravel)

### 🛠 Tech Stack

* Laravel (v11+)
* PHP 8.2+
* Guzzle (for HTTP requests)
* OpenWeatherMap API

### 📦 Installation

```bash
git clone https://github.com/your-username/weather-backend.git
cd weather-backend
composer install
cp .env.example .env
php artisan key:generate
```

### 🔐 Environment Setup

Edit your `.env`:

```env
APP_URL=http://localhost:8000
OPENWEATHER_API_KEY=your_openweather_api_key
```

Run:

```bash
php artisan serve
```

API will be available at: `http://localhost:8000/api`

### 🧪 API Endpoints

| Method | Endpoint                       | Description                |
| ------ | ------------------------------ | -------------------------- |
| GET    | `/api/weather?city=Nairobi`    | Get weather by city name   |
| GET    | `/api/weather?lat=...&lon=...` | Get weather by coordinates |

### 📁 Project Structure

```
weather-backend/
 ┣ app/
 ┃ ┗ Http/
 ┃   ┣ Controllers/
 ┃   ┗ Services/
 ┣ routes/
 ┃ ┗ api.php
 ┣ .env
```

### 🧼 Code Quality

```bash
php artisan lint
php artisan test
```

---

## ✅ TODO

* [ ] Add error handling for geolocation
* [ ] Add charts for forecast trends
* [ ] Unit and E2E tests
* [ ] Caching API responses
* [ ] Add forecast support
* [ ] Add location-based suggestions

---

