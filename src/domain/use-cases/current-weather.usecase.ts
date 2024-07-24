import { CurrentWeatherEntity } from "../entities/current-weather.entity";

export interface ICurrentWeatherUseCase {
  find(city: string): Promise<CurrentWeatherEntity>;
}
