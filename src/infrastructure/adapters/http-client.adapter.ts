import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { IHttpClientAdapter } from "../../domain/adapters/http-client.adapter";
import { injectable } from "tsyringe";

@injectable()
export class HttpClientAdapter implements IHttpClientAdapter {
  private readonly axios: AxiosInstance = axios;

  async get(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await this.axios.get(url, options);
  }
  // post
  // patch
  // put
  // delete
}
