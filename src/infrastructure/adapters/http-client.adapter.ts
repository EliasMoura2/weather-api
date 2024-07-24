import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import { IHttpClientAdapter } from "../../domain/adapters/http-client.adapter";

export class HttpClientAdapter {

  static async get(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await axios.get(url, options);
  }
  // post
  // patch
  // put
  // delete
}
