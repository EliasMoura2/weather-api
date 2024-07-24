import { ForecastWeatherEntity } from "../entities/forecast-weather.entity";

export interface IForecastWeatherUseCase {
  find(city: string): Promise<ForecastWeatherEntity>;
}
