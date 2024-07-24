import { ForecastWeatherEntity } from "../entities/forecast-weather.entity";

export interface IForecastWeatherFinderUseCase {
  find(city: string): Promise<ForecastWeatherEntity>;
}
