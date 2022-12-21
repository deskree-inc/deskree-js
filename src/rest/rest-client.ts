import { HttpHandler, HttpHandlerInterface } from '../http-handler'
import { RestQueryBuilder } from './rest-query-builder'

export class RestClient {

  protected client: HttpHandlerInterface
  protected path: string = "/rest/collections"

  constructor(url: string, http?: HttpHandlerInterface) {
    this.client = http === undefined ? new HttpHandler(url) : http
    this.client.createInstance(this.path)
  }

  from(table: string) {
    return new RestQueryBuilder(table, this.client)
  }

  auth(token: string) {
    this.client.createInstance(this.path, { 'Authentication': 'Bearer ' + token })
  }

}