import React from "react";

import { WeatherResult } from "../getWeather";

export default ({
  name,
  weather
}: {
  name: string;
  weather: WeatherResult;
}) => (
  <React.Fragment>
    <div className="city-name">{name}</div>
    <div>{weather.wind.speed} MPH</div>
    <div>{weather.temperature.actual} C</div>
    <div>{weather.temperature.feelsLike} C</div>
    <div>{weather.summary.description}</div>
  </React.Fragment>
);
