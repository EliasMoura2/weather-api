/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from 'tsyringe';
import { BadRequestError } from '../errors';
import { ForecastWeatherEntity } from '../entities/forecast-weather.entity';


@injectable()
export class ForecastWeatherMapper {
  entityFromObject(object: { [key: string]: any }) {
    const { city, list } = object;

    const { name, country } = city;

    if (!country) throw new BadRequestError('Missing country code');

    if (!list.length) throw new BadRequestError('Missing description');

    if (!name) throw new BadRequestError('Missing city name');

    const weathers = this.mapWeathers(list);

    return new ForecastWeatherEntity({
      city: name,
      countryCode: country,
      weathers,
    });
  }

  private mapWeathers(weathers: any) {
    return weathers.map((weather: any) => {
      return {
        date: weather.dt_txt,
        description: weather.weather[0].description,
        humidity: weather.main.humidity,
        pressure: weather.main.pressure,
        temperature: weather.main.temp,
        tempMax: weather.main.temp_max,
        tempMin: weather.main.temp_min,
        windSpeed: weather.wind.speed,
      }
    })
  }
}
