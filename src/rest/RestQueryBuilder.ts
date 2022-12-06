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

  select(params?: SelectParamsDataType) {
    return this.client.get(this.table, { params })
  }

}

type SelectParamsDataType = {
  where?: string
  'sorted[param]'?: string
  'sorted[how]'?: string
  page?: number
  limit?: number
}