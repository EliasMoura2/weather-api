// import axios from "axios";
// import { BadRequestError } from "../../shared/domain/errors/custom.error";

import { inject, injectable } from "tsyringe";
import { HttpClientAdapter } from "../../../shared";
import { IHttpClientAdapter } from "../../../shared/domain/interfaces/adapters/http-client.adapter";

@injectable()
export class FindLocationService {

  constructor(
    @inject(HttpClientAdapter)
    private readonly httpClient: IHttpClientAdapter
  ) {}
  async find() {
    return await this.httpClient.get('http://ip-api.com/json');
    // const response = await axios.get(`http://ip-api.com/json/24.48.0.1`);
    // return location;
  }
}