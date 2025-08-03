# Weather App

A modern React application that fetches live weather data for any city in the world. This project was built to practice professional developer workflows, including API integration, environment variables, and performance optimization.

## Features

- **Search by City:** Users can type in a city name to get the current weather.
- **Conditional Rendering:** The app displays a "Loading..." message while fetching data and an error message if the request fails.
- **Secure API Key Handling:** The project uses environment variables to securely store the API key, which is a critical best practice.
- **API Integration:** It uses the OpenWeatherMap API to get weather data.
- **Performance Optimization:** The search functionality is **debounced**, which means the API call only fires after the user has stopped typing for a short period, preventing unnecessary requests.

## Technologies Used

- **Vite:** A fast and modern build tool for React.
- **React (`useState`, `useEffect`):** For managing the application's state and handling side effects.
- **Axios:** A popular, promise-based library for making network requests.
- **`.env` File:** Used to store sensitive information (like the API key) securely.
- **JavaScript ES6+:** Utilizes modern features like `async/await` and template literals.
- **CSS:** Custom styles to provide a clean and responsive user interface.

## How to Get Started

### Step 1: Clone the Repository

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
cd weather-app
```

### Step 2: Get your API key

```Go to https://openweathermap.org/ and sign up for a free account.
Once logged in, navigate to the "API Keys" section to find or generate your key.
```

### Step 3: Configure Environment Variables

```
In the root of the project directory, create a new file named .env.
Add the following line to the file, replacing your_api_key_here with the key you copied from OpenWeatherMap:
VITE_API_KEY=your_api_key_here
Start the development server:
    npm run dev

The application will be available at http://localhost:5173.
```
