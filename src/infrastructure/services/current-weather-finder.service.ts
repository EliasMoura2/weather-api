import { injectable } from "tsyringe";
import { envs } from "../../config";
import { HttpClientAdapter } from "../adapters";
import { ICurrentWeatherFinderService } from "../../domain";

@injectable()
export class CurrentWeatherFinderService implements ICurrentWeatherFinderService {
  async find(city: string) {
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    const appId = envs.OPEN_WEATHER_APPID;

    const url = `${baseUrl}?q=${city}&appid=${appId}&units=metric`;

    return HttpClientAdapter.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 5000,
    });
  }
}
