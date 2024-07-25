/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IForecastWeatherService {
  find(city: string): Promise<any>;
}