class CityWeather {
  constructor(
    title,
    airPressure,
    humidity,
    maxTemp,
    minTemp,
    predictability,
    theTemp,
    visibility,
    weatherStateAbbr,
    weatherStateName,
    windDirection,
    windDirectionCompass,
    windSpeed,
    sunRise,
    sunSet
  ) {
    this.title = title;
    this.airPressure = airPressure;
    this.humidity = humidity;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.predictability = predictability;
    this.theTemp = theTemp;
    this.visibility = visibility;
    this.weatherStateAbbr = weatherStateAbbr;
    this.weatherStateName = weatherStateName;
    this.windDirection = windDirection;
    this.windDirectionCompass = windDirectionCompass;
    this.windSpeed = windSpeed;
    this.sunRise = sunRise;
    this.sunSet = sunSet;
  }
}

export default CityWeather;
