import { inject, injectable } from "tsyringe";
import {
  FORECAST_WEATHER_MAPPER,
  FORECAST_WEATHER_SERVICE,
  ForecastWeatherEntity,
  ForecastWeatherMapper,
  IForecastWeatherService,
  IForecastWeatherUseCase,
  ILocationFinderService,
  LOCATION_FINDER_SERVICE,
} from "../domain";

@injectable()
export class ForecastWeatherUseCase implements IForecastWeatherUseCase {
  constructor(
    @inject(LOCATION_FINDER_SERVICE)
    private readonly locationFinderService: ILocationFinderService,
    @inject(FORECAST_WEATHER_SERVICE)
    private readonly forecastWeatherFinderService: IForecastWeatherService,
    @inject(FORECAST_WEATHER_MAPPER)
    private readonly forecastWeatherMapper: ForecastWeatherMapper
  ) {}

  async find(city: string): Promise<ForecastWeatherEntity> {
    if (!city) {
      const response = await this.locationFinderService.find();
      city = response.data.city;
    }

    const response = await this.forecastWeatherFinderService.find(city);

    return this.forecastWeatherMapper.entityFromObject(response?.data);
  }
}
