import axios, { AxiosInstance } from "axios"
import * as https from "https";
import { RestQueryBuilder } from "./RestQueryBuilder";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export class RestClient {

  protected url: string
  protected client: AxiosInstance

  constructor(url: string) {
    this.url = url
    this.client = axios.create({
      baseURL: url,
      headers: { 'Content-Type': 'application/json' },
      httpsAgent
    })
  }

  from(table: string) {
    return new RestQueryBuilder(this.url, table, this.client)
  }

}