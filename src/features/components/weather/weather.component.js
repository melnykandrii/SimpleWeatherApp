import React, { useContext } from "react";
import { Text } from "../../../components/typography/text/text.component";
import styled from "styled-components";
import { WeatherContext } from "../../../services/weather/weather.context";

const Container = styled.View`
  flex: 8;
  padding-horizontal: 10px;
`;

const Centered = styled(Text)`
  align-self: center;
  padding-bottom: 5px;
`;

const TempContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const SunContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const WeatherImage = styled.Image`
  width: 100px;
  height: 100px;
  align-self: center;
`;

export const WeatherComponent = () => {
  const { weather, isLoading, error } = useContext(WeatherContext);
  return (
    <Container>
      <Centered variant="header">{weather.title}</Centered>
      <Centered>{weather.weatherStateName}</Centered>
      <Centered variant="temp">{weather.theTemp}</Centered>
      <WeatherImage
        source={{
          uri: `https://www.metaweather.com//static/img/weather/png/${weather.weatherStateAbbr}.png`,
        }}
      />
      <TempContainer>
        <Text>H:</Text>
        <Text>{weather.maxTemp}</Text>
        <Text style={{ paddingLeft: 5 }}>L:</Text>
        <Text>{weather.minTemp}</Text>
      </TempContainer>
      <SunContainer>
        <Text>SunRise</Text>
        <Text>{weather.sunRise}</Text>
        <Text>SunSet</Text>
        <Text>{weather.sunSet}</Text>
      </SunContainer>
      <Text>AirPressure:</Text>
      <Text>{weather.airPressure}</Text>
      <Text>Humidity:</Text>
      <Text>{weather.humidity}</Text>
      <Text>Visibility:</Text>
      <Text>{weather.visibility}</Text>
      <Text>Wind:</Text>
      <Text>{weather.windDirection}</Text>
    </Container>
  );
};
