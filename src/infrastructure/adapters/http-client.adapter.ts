import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
export class HttpClientAdapter {

  static async get(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await axios.get(url, options);
  }
  // post
  // patch
  // put
  // delete
}
