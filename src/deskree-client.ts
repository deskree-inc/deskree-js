import { AuthClient } from './auth/auth-client'
import { ClientOptions } from './client-options'
import { RestClient } from './rest/rest-client'

export class DeskreeClient {

  protected url: string
  private rest: RestClient | undefined
  private opts: ClientOptions

  constructor(opts: ClientOptions) {
    this.opts = opts
    let domain = 'api.deskree.com'
    if (!opts.projectId) throw new Error('projectId is required.')
    if (opts.host !== undefined) domain = opts.host

    this.url = `https://${opts.projectId}.${domain}/api/v1`
  }

  database(name: string = "collections", options?: ClientOptions) : RestClient {
    this.rest = new RestClient({ options: options || this.opts, url: this.url, http: this.opts.http, axios: this.opts.axios, database: name })
    return this.rest
  }

  auth() : AuthClient {
    return new AuthClient({ options: this.opts, url: this.url, rest: this.rest, http: this.opts.http, axios: this.opts.axios })
  }
}