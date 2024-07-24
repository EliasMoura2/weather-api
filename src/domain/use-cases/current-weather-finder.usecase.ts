import { CurrentWeatherEntity } from "../entities/current-weather.entity";

export interface ICurrentWeatherFinderUseCase {
  find(city: string): Promise<CurrentWeatherEntity>;
}
