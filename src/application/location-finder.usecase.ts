import { inject, injectable } from 'tsyringe';
import {
  ILocationFinderService,
  ILocationFinderUseCase,
  LOCATION_FINDER_SERVICE,
  LOCATION_MAPPER,
  LocationEntity,
  LocationMapper,
} from '../domain';

@injectable()
export class LocationFinderUseCase implements ILocationFinderUseCase {
  constructor(
    @inject(LOCATION_FINDER_SERVICE)
    private readonly locationFinderService: ILocationFinderService,
    @inject(LOCATION_MAPPER)
    private readonly locationMapper: LocationMapper
  ) {}

  async find(): Promise<LocationEntity> {
    const response = await this.locationFinderService.find();

    return this.locationMapper.entityfromObject(response.data);
  }
}
