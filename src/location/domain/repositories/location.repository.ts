import { LocationEntity } from "../entities/location.entity";

export abstract class LocationRepository {
  abstract getLocations(): Promise<LocationEntity>;
}