import { inject, injectable } from 'tsyringe';
import {
  CURRENT_WEATHER_MAPPER,
  CURRENT_WEATHER_SERVICE,
  CurrentWeatherEntity,
  CurrentWeatherMapper,
  ICurrentWeatherService,
  ICurrentWeatherUseCase,
  ILocationFinderService,
  LOCATION_FINDER_SERVICE,
} from '../domain';

@injectable()
export class CurrentWeatherUseCase implements ICurrentWeatherUseCase {
  constructor(
    @inject(LOCATION_FINDER_SERVICE)
    private readonly locationFinderService: ILocationFinderService,
    @inject(CURRENT_WEATHER_SERVICE)
    private readonly currentWeatherFinderService: ICurrentWeatherService,
    @inject(CURRENT_WEATHER_MAPPER)
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
