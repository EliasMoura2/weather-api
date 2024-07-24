import { inject, injectable } from "tsyringe";
import { CurrentWeatherFinderService } from "../infrastructure/services/current-weather-finder.service";
import { CurrentWeatherMapper } from "../domain/mappers/current-weather.mapper";
import { LocationFinderService } from "../infrastructure/services/location-finder.service";
import { CurrentWeatherEntity, ICurrentWeatherFinderUseCase } from "../domain";

@injectable()
export class CurrentWeatherFinderUseCase implements ICurrentWeatherFinderUseCase {
  constructor(
    @inject(LocationFinderService)
    private readonly locationFinderService: LocationFinderService,
    @inject(CurrentWeatherFinderService)
    private readonly currentWeatherFinderService: CurrentWeatherFinderService,
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
