import { proxy, subscribe, snapshot } from "valtio";

import getWeather, { WeatherResult } from "./getWeather";

interface ICityWeather {
  name: string;
  weather: WeatherResult;
}

interface IStore {
  city: string;
  cities: ICityWeather[];
  getAvarageTemp: () => number;
}

const store = proxy<IStore>({
  city: "",
  cities: [],
  getAvarageTemp: () =>
    store.cities.reduce(
      (acc, c) => acc + c.weather.temperature.actual / store.cities.length,
      0
    ).toFixed(2)
});

export const addCity = async () => {
  const weather = await getWeather(store.city);
  if (weather) {
    store.cities.push({
      name: store.city,
      weather
    });
  }
  store.city = "";
};

subscribe(store, () => {
  console.log("store changed", snapshot(store));
});

export default store;
