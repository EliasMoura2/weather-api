import { inject, injectable } from "tsyringe";
import { CurrentWeatherFinderService } from "../infrastructure/services/current-weather-finder.service";
import { LocationFinderService } from "../infrastructure/services/location-finder.service";
import {
  CurrentWeatherEntity,
  CurrentWeatherMapper,
  ICurrentWeatherFinderService,
  ICurrentWeatherFinderUseCase,
  ILocationFinderService,
} from "../domain";

@injectable()
export class CurrentWeatherFinderUseCase
  implements ICurrentWeatherFinderUseCase
{
  constructor(
    @inject(LocationFinderService)
    private readonly locationFinderService: ILocationFinderService,
    @inject(CurrentWeatherFinderService)
    private readonly currentWeatherFinderService: ICurrentWeatherFinderService,
    @inject(CurrentWeatherMapper)
    private readonly currentWeatherMapper: CurrentWeatherMapper
  ) {}

  async find(city: string): Promise<CurrentWeatherEntity> {
    if (!city) {
      const response = await this.locationFinderService.find();
      city = response.data.city;
    }

    const response = await this.currentWeatherFinderService.find(city);

    return this.currentWeatherMapper.entityFromObject(response?.data);
  }
}
