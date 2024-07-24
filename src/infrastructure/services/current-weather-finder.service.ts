import { inject, injectable } from "tsyringe";
import { HttpClientAdapter } from "../adapters";
import { envs } from "../../config";
import { ICurrentWeatherFinderService } from "../../domain/services/current-weather-finder.service";

@injectable()
export class CurrentWeatherFinderService implements ICurrentWeatherFinderService {
  private readonly baseUrl: string;
  private readonly appId: string;

  constructor(
    @inject(HttpClientAdapter)
    private readonly httpClient: HttpClientAdapter
  ) {
    this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    this.appId = envs.OPEN_WEATHER_APPID;
  }

  async find(city: string) {
    const url = `${this.baseUrl}?q=${city}&appid=${this.appId}&units=metric`;

    return await this.httpClient.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 5000,
    });
  }
}
