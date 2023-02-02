import { HttpHandler, HttpHandlerInterface } from '../http-handler'
import { RequestOptions } from '../request-options'

export class ConfigClient {

  protected client: HttpHandlerInterface
  protected path: string = "/config"

  constructor(opts: RequestOptions) {
    this.client = opts.http === undefined ? new HttpHandler(opts.url, opts.axios) : opts.http
    this.client.createInstance(this.path, opts.headers)
  }

  async getSchema(table: string) {
    try {
      const res = await this.client.get('/collections')
      return res
    } catch (e) {
      throw e
    }
  }

  getDataTypes(token: string) {
    const res = this.client.get('/collections')
    return res
  }

}