import React, { createContext, useContext, useState, useEffect } from "react";
import { LocationContext } from "../location/location.context";
import { weatherRequest } from "./weather.service";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveWeather = (loc) => {
    setIsLoading(true);
    setWeather([]);
    weatherRequest(loc)
      .then((results) => {
        setError(null);
        setIsLoading(false);
        setWeather(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (location) {
      setIsLoading(true);
      retrieveWeather(location);
    }
  }, [location]);

  return (
    <WeatherContext.Provider value={{ weather, isLoading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};
