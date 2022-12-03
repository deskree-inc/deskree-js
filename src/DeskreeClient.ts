import { RestClient } from "./rest/RestClient"

export class DeskreeClient {

  protected url: string
  protected rest: RestClient

  constructor(projectId: string) {
    if (!projectId) throw new Error('projectId is required.')

    this.url = `https://${projectId}.api.deskree.com/api/v1/rest/collections/`
    this.rest = new RestClient(this.url)
  }

  from(table: string) {
    return this.rest.from(table)
  }

}