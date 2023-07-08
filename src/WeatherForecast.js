import React, { useState } from "react";

import axios from "axios";
import "./Weather.css";
import WeatherDayForecast from "./WeatherDayForecast";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div className="row">
                <div className="col-2" key={index}>
                  <WeatherDayForecast data={dailyForecast} />
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let apiKey = `88724523008dc9e1be18f6eb6a959b67`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
