
export interface ICurrentWeatherFinderService {
  find(city: string): Promise<any>;
}
