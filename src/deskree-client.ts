import { AuthClient } from './auth/auth-client'
import { ClientOptions } from './interfaces/client-options'
import { ConfigClient } from './config/config-client'
import { IntegrationClient } from './integration/interation-client'
import { RestClient } from './rest/rest-client'

export class DeskreeClient {

  protected url: string
  private rest: RestClient | undefined
  private opts: ClientOptions

  constructor(opts: ClientOptions) {
    this.opts = opts
    let domain = 'api-dev.deskree.com'
    if (!opts.projectId) throw new Error('projectId is required.')
    if (opts.host !== undefined) domain = opts.host

    this.url = `https://${opts.projectId}.${domain}/api/v1`
  }

  database(name: string = "collections", options?: ClientOptions): RestClient {
    this.rest = new RestClient({
      options: options || this.opts,
      url: this.url,
      http: this.opts.http,
      axios: this.opts.axios,
      database: name.toLowerCase(),
      headers: options?.headers
    })

    return this.rest
  }

  auth(): AuthClient {
    return new AuthClient({
      options: this.opts,
      url: this.url,
      rest: this.rest,
      http: this.opts.http,
      axios: this.opts.axios
    })
  }

  integration(name: string, options?: ClientOptions): IntegrationClient {
    return new IntegrationClient({
      options: options || this.opts,
      url: this.url,
      http: this.opts.http,
      axios: this.opts.axios,
      integration: name.toLowerCase(),
      headers: options?.headers
    })
  }

  config(): ConfigClient {
    return new ConfigClient({
      options: this.opts,
      url: this.url,
      http: this.opts.http,
      axios: this.opts.axios,
      headers: this.opts.headers
    })
  }
}