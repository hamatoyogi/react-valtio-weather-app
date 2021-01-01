import React from "react";

import WeatherResult from "./WeatherResult";
import store from "../store";
import { useProxy } from "valtio";

export default () => {
  const snapshot = useProxy(store);
  const cities = snapshot.cities;

  return (
    <div className="cities">
      <div className="headers five-col-grid">
        <h4>Cities</h4>
        <h4>Wind Speed</h4>
        <h4>Actual Temp</h4>
        <h4>Feels Like</h4>
        <h4>Summary</h4>
      </div>

      <div className="five-col-grid">
        {cities.map(city => (
          <WeatherResult
            name={city.name}
            key={city.name}
            weather={city.weather}
          />
        ))}
      </div>
      <h5>Average: {snapshot.getAvarageTemp()}</h5>
    </div>
  );
};
