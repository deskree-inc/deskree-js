import * as https from "https";
import { HttpHandlerInterface } from "../HttpHandler";
import { RestQueryBuilder } from "./RestQueryBuilder";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export class RestClient {

  protected client: HttpHandlerInterface

  constructor(http: HttpHandlerInterface) {
    this.client = http;
    this.client.createInstance("/rest/collections");
  }

  from(table: string) {
    return new RestQueryBuilder(table, this.client)
  }

}