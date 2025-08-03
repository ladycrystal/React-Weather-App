import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const [debouncedCity, setDebouncedCity] = useState(city);
  const [submittedCity, setSubmittedCity] = useState("London");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCity(city);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [city]);

  const fetchWeather = async () => {
    if (!submittedCity) return;
    setWeather({ ...weather, error: null, loading: true });
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${submittedCity}&appid=${apiKey}&units=metric`
      );
      setWeather({ data: response.data, loading: false, error: null });
    } catch (error) {
      setWeather({ ...weather, error: error.message, loading: false });
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [submittedCity]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedCity(city);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Weather App</h1>
      </header>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      <div className="weather-container">
        {weather.loading && <p>Loading...</p>}
        {weather.error && <p>Error: {weather.error}</p>}
        {weather.data && (
          <div className="weather-card">
            <h2>{weather.data.name}</h2>
            <p className="temp">
              {weather.data.main.temp.toFixed(1)}°C
              <img
                src={`https://openweathermap.org/img/w/${weather.data.weather[0].icon}.png`}
                alt={weather.data.weather[0].description}
                className="weather-icon"
              />
            </p>
            <p className="description">{weather.data.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
