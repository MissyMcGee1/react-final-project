import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="WeatherApp">
        <form className="Search">
          <div className="row">
            <div className="col-5 Cverview">
              <h1 id="date">Friday July 7, 2023</h1>
            </div>
            <div className="col-5">
              <input
                type="search"
                placeholder="Search city..."
                className="FormControl"
                autocomplete="off"
                autofocus="on"
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
        <h2 className="Location">Christchurch</h2>

        <div className="row">
          <div className="col-md-6">
            <div className="d-flex WeatherTemperature">
              <img src="#" alt="weather icon" />
              <div>
                <strong>12</strong>
                <span className="Units">°C </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                <span className="ListTitle">High: </span>
                <span></span>°
              </li>
              <li>
                <span className="ListTitle">Low: </span>
                <span></span>°
              </li>
              <li>
                <span className="ListTitle">Wind Speed:</span>
                <span></span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
