import { inject, injectable } from "tsyringe";
import { LocationFinderService } from "../infrastructure/services/location-finder.service";
import { ForecastWeatherFinderService } from "../infrastructure/services/forecast-weather-finder.service";
import {
  ForecastWeatherEntity,
  ForecastWeatherMapper,
  IForecastWeatherFinderService,
  IForecastWeatherFinderUseCase,
  ILocationFinderService,
} from "../domain";

@injectable()
export class ForecastWeatherFinderUseCase
  implements IForecastWeatherFinderUseCase
{
  constructor(
    @inject(LocationFinderService)
    private readonly locationFinderService: ILocationFinderService,
    @inject(ForecastWeatherFinderService)
    private readonly forecastWeatherFinderService: IForecastWeatherFinderService,
    @inject(ForecastWeatherMapper)
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
