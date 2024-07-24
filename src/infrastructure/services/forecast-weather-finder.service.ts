import { injectable } from "tsyringe";
import { envs } from "../../config";
import { HttpClientAdapter } from "../adapters";
import { IForecastWeatherFinderService } from "../../domain";

@injectable()
export class ForecastWeatherFinderService implements IForecastWeatherFinderService {

  async find(city: string) {
    const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";
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
