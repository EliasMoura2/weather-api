type ForecastWeather = {
  city: string;
  countryCode: string;
  weathers: Weather[];
};

type Weather = {
  date: string;
  description: string;
  humidity: number;
  pressure: number;
  temperature: number;
  tempMax: number;
  tempMin: number;
  windSpeed: number;
};

export class ForecastWeatherEntity {
  private city: string;
  private countryCode: string;
  private weathers: Weather[];

  constructor({ city, countryCode, weathers }: ForecastWeather) {
    this.city = city;
    this.countryCode = countryCode;
    this.weathers = weathers;
  }
}
