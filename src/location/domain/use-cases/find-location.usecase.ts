import { LocationEntity } from "../entities/location.entity";

export interface FindLocationUsecase {
  find(): Promise<any>;
}