
export interface IForecastWeatherService {
  find(city: string): Promise<any>;
}