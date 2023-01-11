import { HttpHandler, HttpHandlerInterface } from '../http-handler'
import { RestQueryBuilder } from './rest-query-builder'

export class RestClient {

  protected client: HttpHandlerInterface
  protected path: string = "/rest/collections"

  constructor(opts: RestClientOptions) {
    this.client = opts.http === undefined ? new HttpHandler(opts.url, opts.axios) : opts.http
    this.client.createInstance(this.path)
  }

  from(table: string) {
    return new RestQueryBuilder(table, this.client)
  }

  auth(token: string) {
    this.client.createInstance(this.path, { 'Authentication': 'Bearer ' + token })
  }

}

export interface RestClientOptions {
  url: string;
  http?: HttpHandlerInterface;
  axios?: any | undefined;
}