
export interface ICurrentWeatherService {
  find(city: string): Promise<any>;
}
