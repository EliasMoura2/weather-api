import { inject, injectable } from "tsyringe";
import { HttpClientAdapter } from "../adapters";
import { IHttpClientAdapter } from "../../domain/adapters/http-client.adapter";
import { ILocationFinderService } from "../../domain";

@injectable()
export class LocationFinderService implements ILocationFinderService {
  private readonly baseUrl: string;

  constructor(
    @inject(HttpClientAdapter)
    private readonly httpClient: IHttpClientAdapter
  ) {
    this.baseUrl = 'http://ip-api.com/json';
  }

  async find() {
    return await this.httpClient.get(this.baseUrl);
  }
}