import { injectable } from 'tsyringe';
import { envs } from '../../config';
import { HttpClientAdapter } from '../adapters';
import { IForecastWeatherService } from '../../domain';

@injectable()
export class ForecastWeatherService implements IForecastWeatherService {
  async find(city: string) {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    const appId = envs.OPEN_WEATHER_APPID;

    const url = `${baseUrl}?q=${city}&appid=${appId}&units=metric`;

    return HttpClientAdapter.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 5000,
    });
  }
}
