import { HttpHandlerInterface } from '../HttpHandler'
import { RestQueryBuilder } from './RestQueryBuilder'

export class RestClient {

  protected client: HttpHandlerInterface

  constructor(http: HttpHandlerInterface) {
    this.client = http
    this.client.createInstance('/rest/collections')
  }

  from(table: string) {
    return new RestQueryBuilder(table, this.client)
  }

}