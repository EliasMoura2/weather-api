
export interface IForecastWeatherFinderService {
  find(city: string): Promise<any>;
}