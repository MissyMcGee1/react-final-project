import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(response.data.main.city);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humitity: response.data.main.humitity,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="WeatherApp">
          <form className="Search" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-5 Cverview">
                <FormattedDate date={weatherData.date} />
              </div>
              <div className="col-5">
                <input
                  type="search"
                  placeholder="Search city..."
                  className="FormControl"
                  autocomplete="off"
                  autofocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div class="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <hr />
          <h2 className="Location">{weatherData.city}</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="d-flex WeatherTemperature">
                <img src="#" alt="weather icon" />
                <div>
                  <strong>{weatherData.temperature}</strong>
                  <span className="Units">°C </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <span className="ListTitle">High: </span>
                  <span>{weatherData.high}</span>°
                </li>
                <li>
                  <span className="ListTitle">Low: </span>
                  <span>{weatherData.low}</span>°
                </li>
                <li>
                  <span className="ListTitle">Wind Speed:</span>
                  <span>{weatherData.wind}</span>km/h
                </li>
              </ul>
            </div>
            <div className="weather-description" id="description">
              {weatherData.description}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7b6fdad0cbd018949c50c70f72250726";
    let city = "Christchurch";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
