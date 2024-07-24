import { injectable } from "tsyringe";
import { CurrentWeatherEntity } from "../entities/current-weather.entity";
import { BadRequestError } from "../errors";


@injectable()
export class CurrentWeatherMapper {
  entityFromObject(object: { [key: string]: any }) {
    const { main, name, sys, weather, wind } = object;

    const { temp, temp_max, temp_min, humidity, pressure } = main;

    const { country } = sys;

    const { description } = weather[0];

    const { speed } = wind;

    if (!country) throw new BadRequestError("Missing country code");

    if (!description) throw new BadRequestError("Missing description");

    if (!humidity) throw new BadRequestError("Missing humidity");

    if (!name) throw new BadRequestError("Missing city name");

    if (!pressure) throw new BadRequestError("Missing pressure");

    if (!temp) throw new BadRequestError("Missing temperature");

    if (!temp_max) throw new BadRequestError("Missing min temperature");

    if (!temp_min) throw new BadRequestError("Missing max temperature");

    if (!speed) throw new BadRequestError("Missing wind speed");

    return new CurrentWeatherEntity({
      city: name,
      countryCode: country,
      description,
      humidity,
      pressure,
      temperature: temp,
      tempMax: temp_max,
      tempMin: temp_min,
      windSpeed: speed,
    });
  }
}
