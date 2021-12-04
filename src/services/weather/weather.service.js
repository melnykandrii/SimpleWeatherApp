import camelize from "camelize";
import CityWeather from "../models/cityWeather";

export const weatherRequest = async (location) => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/${location}/`
  );

  const res = await response.json();
  const transformData = camelize(res);
  if (!res.status === "OK") {
    throw new Error("Something went wrong!");
  }

  const weather = new CityWeather(
    transformData.title.toUpperCase(),
    transformData.consolidatedWeather[0].airPressure,
    transformData.consolidatedWeather[0].humidity + "%",
    Math.round(transformData.consolidatedWeather[0].maxTemp),
    Math.round(transformData.consolidatedWeather[0].minTemp),
    transformData.consolidatedWeather[0].predictability,
    Math.round(transformData.consolidatedWeather[0].theTemp),
    Math.round(transformData.consolidatedWeather[0].visibility),
    transformData.consolidatedWeather[0].weatherStateAbbr,
    transformData.consolidatedWeather[0].weatherStateName,
    transformData.consolidatedWeather[0].windDirectionCompass +
      " " +
      Math.round(transformData.consolidatedWeather[0].windSpeed) +
      " mph",
    transformData.consolidatedWeather[0].windDirectionCompass,
    Math.round(transformData.consolidatedWeather[0].windSpeed),
    transformData.sunRise.split("T")[1].split(":").slice(0, 2).join(":"),
    transformData.sunSet.split("T")[1].split(":").slice(0, 2).join(":")
  );

  return weather;
};
