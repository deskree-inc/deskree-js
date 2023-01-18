import { HttpHandler, HttpHandlerInterface } from '../http-handler'
import { RequestOptions } from '../request-options'
import { RestQueryBuilder } from './rest-query-builder'

export class RestClient {

  protected client: HttpHandlerInterface
  protected path: string = "/rest/"

  constructor(opts: RequestOptions) {
    this.client = opts.http === undefined ? new HttpHandler(opts.url, opts.axios) : opts.http
    this.path += opts.database === undefined || opts.database.trim() === "" ? "collections" : opts.database
    this.client.createInstance(this.path, opts.headers)

    if(opts.options.adminToken) this.authAdmin(opts.options.adminToken);
    if(opts.options.userToken) this.auth(opts.options.userToken);
  }

  from(table: string) {
    return new RestQueryBuilder(table, this.client)
  }

  auth(token: string) {
    this.client.createInstance(this.path, { 'Authentication': 'Bearer ' + token })
  }

  authAdmin(token: string) {
    this.client.createInstance(this.path, { 'deskree-admin': token })
  }

}