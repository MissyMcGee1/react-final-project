import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Weather.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `6643c7326a4c2a38838264a28531d97e`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="col-2">
        <WeatherIcon code="01d" size="60" />
        <div className="WeatherForecastDate">Thursday</div>
        <div className="WeatherForecastTemp">
          <span className="WeatherForecastTempMax">12° </span>
          <span className="WeatherForecastTempMin"> 10°</span>
        </div>
      </div>
    </div>
  );
}
