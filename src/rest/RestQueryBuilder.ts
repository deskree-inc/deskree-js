import { AxiosInstance } from "axios"

export class RestQueryBuilder {

  protected url: string
  protected table: string
  protected client: AxiosInstance

  constructor(url: string, table: string, client: AxiosInstance) {
    this.url = url
    this.table = table
    this.client = client
  }

  select() {
    return this.client.get(this.table)
  }

}