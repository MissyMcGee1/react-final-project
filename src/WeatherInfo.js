import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="Location">{props.data.city}</h2>
      <div className="col-5 Overview">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex WeatherTemperature">
            <img src="#" alt="weather icon" />
            <div>
              <strong>{props.data.temperature}</strong>
              <span className="Units">°C </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <ul>
            <li>
              <span className="ListTitle">High: </span>
              <span>{props.data.high}</span>°
            </li>
            <li>
              <span className="ListTitle">Low: </span>
              <span>{props.data.low}</span>°
            </li>
            <li>
              <span className="ListTitle">Wind Speed:</span>
              <span>{props.data.wind}</span>km/h
            </li>
          </ul>
        </div>
        <div className="weather-description" id="description">
          {props.data.description}
        </div>
      </div>
    </div>
  );
}
