import { RestClient } from "./rest/RestClient"

export class DeskreeClient {

  protected url: string
  rest: RestClient

  constructor(projectId: string) {
    if (!projectId) throw new Error('projectId is required.')

    this.url = `https://${projectId}.api.deskree.com/api/v1`
    this.rest = new RestClient(this.url)
  }

}