import { inject, injectable } from "tsyringe";
import { LocationFinderService } from "../infrastructure/services/location-finder.service";
import { ForecastWeatherFinderService } from "../infrastructure/services/forecast-weather-finder.service";
import { IForecastWeatherFinderService } from "../domain/services/forecast-weather-finder.service";
import { ForecastWeatherMapper } from "../domain/mappers/forecast-weather.mapper";
import { IForecastWeatherFinderUseCase } from "../domain/use-cases/forecast-weather-finder.usecase";

@injectable()
export class ForecastWeatherFinderUseCase implements IForecastWeatherFinderUseCase{
  constructor(
    @inject(LocationFinderService)
    private readonly locationFinderService: LocationFinderService,
    @inject(ForecastWeatherFinderService)
    private readonly forecastWeatherFinderService: IForecastWeatherFinderService,
    @inject(ForecastWeatherMapper)
    private readonly forecastWeatherMapper: ForecastWeatherMapper
  )
  {}

  async find(city: string) {
    if (!city) {
      const response = await this.locationFinderService.find();
      city = response.data.city;
    }

    const response = await this.forecastWeatherFinderService.find(city);

    return this.forecastWeatherMapper.entityFromObject(response?.data);
  }
}
