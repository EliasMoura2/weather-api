import { inject, injectable } from "tsyringe";
import { LocationEntity, LocationMapper } from "../domain";
import { LocationFinderService } from "../infrastructure/services/location-finder.service";
import { ILocationFinderUseCase } from "../domain/use-cases/location-finder.usecase";

@injectable()
export class LocationFinderUseCase implements ILocationFinderUseCase {
  constructor(
    @inject(LocationFinderService)
    private readonly locationFinderService: LocationFinderService,
    @inject(LocationMapper)
    private readonly locationMapper: LocationMapper
  ) {}

  async find(): Promise<LocationEntity> {
    const response = await this.locationFinderService.find();

    return this.locationMapper.entityfromObject(response.data);
  }
}
