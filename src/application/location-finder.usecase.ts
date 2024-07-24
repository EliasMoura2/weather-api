import { inject, injectable } from "tsyringe";
import { ILocationFinderService, ILocationFinderUseCase, LocationEntity, LocationMapper } from "../domain";
import { LocationFinderService } from "../infrastructure";

@injectable()
export class LocationFinderUseCase implements ILocationFinderUseCase {
  constructor(
    @inject(LocationFinderService)
    private readonly locationFinderService: ILocationFinderService,
    @inject(LocationMapper)
    private readonly locationMapper: LocationMapper
  ) {}

  async find(): Promise<LocationEntity> {
    const response = await this.locationFinderService.find();

    return this.locationMapper.entityfromObject(response.data);
  }
}
