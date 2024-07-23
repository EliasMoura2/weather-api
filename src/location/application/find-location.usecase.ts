import { inject, injectable } from "tsyringe";
import { FindLocationUsecase, LocationMapper } from "../domain";
import { FindLocationService } from "../infrastructure/services/find-location.service";
import { BadRequestError } from "../../shared";

@injectable()
export class FindLocationUseCase implements FindLocationUsecase {
  constructor(
    @inject(FindLocationService)
    private readonly findLocationService: FindLocationService,
    @inject(LocationMapper)
    private readonly locationMapper: LocationMapper
  ) {}
  
  async find() {
    const response = await this.findLocationService.find();

    if(response.data.status !== 'success') {
      throw new BadRequestError("Invalid IP");
    }

    return this.locationMapper.entityfromObject(response.data);
    // return response.data;
  }
}
