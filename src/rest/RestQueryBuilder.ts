import { AxiosInstance } from "axios"
import { SelectParamsDataType } from "./types"

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

    if (params && params.where) {
      params.where = JSON.stringify(params.where);
    }

    return this.client.get(this.table, { params })
  }

}