import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IHttpClientAdapter {
  get(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse>;
  // post
  // patch
  // put
  // delete
}