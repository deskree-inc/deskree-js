import { HttpHandlerInterface } from './http-handler'
import { AuthClient } from './auth/auth-client'
import { RestClient } from './rest/rest-client'

export class DeskreeClient {

  protected url: string
  public rest: RestClient
  public auth: AuthClient

  constructor(opts: DeskreeClientOptions) {
    let domain = 'api.deskree.com'
    if (!opts.projectId) throw new Error('projectId is required.')
    if (opts.host !== undefined) domain = opts.host

    this.url = `https://${opts.projectId}.${domain}/api/v1`
    this.rest = new RestClient({ url: this.url, http: opts.http, axios: opts.axios })
    this.auth = new AuthClient({ url: this.url, rest: this.rest, http: opts.http, axios: opts.axios })
  }
}

export interface DeskreeClientOptions {
  projectId: string;
  host?: string;
  http?: HttpHandlerInterface;
  axios?: any | undefined
}