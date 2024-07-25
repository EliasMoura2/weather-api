/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ICurrentWeatherService {
  find(city: string): Promise<any>;
}
