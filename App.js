import React, { useState } from "react";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { MainScreen } from "./src/features/screens/main.screen";
import { LocationContextProvider } from "./src/services/location/location.context";
import { WeatherContextProvider } from "./src/services/weather/weather.context";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    righteous: require("./assets/fonts/Righteous-Regular.ttf"),
    abril: require("./assets/fonts/Righteous-Regular.ttf"),
    stint: require("./assets/fonts/StintUltraCondensed-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <WeatherContextProvider>
          <MainScreen />
        </WeatherContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
