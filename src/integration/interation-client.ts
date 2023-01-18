import { HttpHandler, HttpHandlerInterface } from '../http-handler'
import { RequestOptions } from '../request-options'

export class IntegrationClient {

  protected client: HttpHandlerInterface
  protected path: string = "/integrations/"

  constructor(opts: RequestOptions) {
    this.client = opts.http === undefined ? new HttpHandler(opts.url, opts.axios) : opts.http
    this.path += opts.integration

    this.client.createInstance(this.path, opts.headers)
  }

  private fixPath(path: string) : string {
    if(path !== undefined && path.trim() !== "") {
        if(path.substring(0, 1) !== "/") path = "/" + path
    }

    return path
  }

  async get(path: string, options?: any) : Promise<any> {
    path = this.fixPath(path)
    return await this.client.get(path, options)
  }

  async post(path: string, options?: any) : Promise<any> {
    path = this.fixPath(path)
    return await this.client.post(path, options)
  }

  async put(path: string, options?: any) : Promise<any> {
    path = this.fixPath(path)
    return await this.client.put(path, options)
  }

  async patch(path: string, options?: any) : Promise<any> {
    path = this.fixPath(path)
    return await this.client.patch(path, options)
  }

  async delete(path: string, options?: any) : Promise<any> {
    path = this.fixPath(path)
    return await this.client.delete(path, options)
  }

}