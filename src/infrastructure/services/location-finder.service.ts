import { injectable } from "tsyringe";
import { HttpClientAdapter } from "../adapters";
import { ILocationFinderService } from "../../domain";

@injectable()
export class LocationFinderService implements ILocationFinderService {
  async find() {
    const url = 'http://ip-api.com/json';
    return HttpClientAdapter.get(url);
  }
}