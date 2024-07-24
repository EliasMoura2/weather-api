import { injectable } from "tsyringe";
import { BadRequestError } from "../errors";
import { LocationEntity } from "../entities/location.entity";

@injectable()
export class LocationMapper {
  entityfromObject(object: { [key: string]: any }) {
    const { city, country, countryCode, lat, lon, regionName, zip } = object;

    if (!city) throw new BadRequestError("Missing city");

    if (!country) throw new BadRequestError("Missing country");

    if (!countryCode) throw new BadRequestError("Missing countryCode");

    if (!lat) throw new BadRequestError("Missing lat");

    if (!lon) throw new BadRequestError("Missing lon");

    if (!regionName) throw new BadRequestError("Missing regionName");

    if (!zip) throw new BadRequestError("Missing zip");

    return new LocationEntity({
      city,
      country,
      countryCode,
      lat,
      lon,
      state: regionName,
      zip,
    });
  }
}
