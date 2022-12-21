import { HttpHandler, HttpHandlerInterface } from './HttpHandler'
import { AuthClient } from './sdk/auth/AuthClient'
import { RestClient } from './sdk/rest/RestClient'

export class DeskreeClient {

  protected url: string
  public rest: RestClient
  public auth: AuthClient
  public http: HttpHandlerInterface

  constructor(projectId: string, host?: string, http?: HttpHandlerInterface) {
    let domain = 'api.deskree.com'
    if (!projectId) throw new Error('projectId is required.')
    if (host !== undefined) domain = host

    this.url = `https://${projectId}.${domain}/api/v1`
    this.http = http === undefined ? new HttpHandler(this.url) : http
    this.rest = new RestClient(this.http)
    this.auth = new AuthClient(this.http, this.rest)
  }

}