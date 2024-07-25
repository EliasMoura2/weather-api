import { LocationEntity } from '../entities/location.entity';

export interface ILocationFinderUseCase {
  find(): Promise<LocationEntity>;
}
