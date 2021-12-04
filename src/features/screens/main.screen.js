import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Alert } from "react-native";
import { LocationContext } from "../../services/location/location.context";
import { EmptyComponent } from "../components/empty/empty-screen.component";
import { LoadingState } from "../components/loading/loading-state.component";
import { SearchComponent } from "../components/search/search.component";
import { WeatherComponent } from "../components/weather/weather.component";

export const MainScreen = () => {
  const { error, location, isLoading } = useContext(LocationContext);

  let MainComponent;

  if (isLoading) {
    MainComponent = LoadingState;
  } else if (!location) {
    MainComponent = EmptyComponent;
  } else if (location) {
    MainComponent = WeatherComponent;
  }

  useEffect(() => {
    if (error) {
      return Alert.alert("Warning!", "Please enter a correct location");
    }
  }, [error]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchComponent />
        <MainComponent />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
