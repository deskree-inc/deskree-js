import { HttpHandlerInterface } from "../HttpHandler"
import { SelectParamsDataType } from "./types"

export class RestQueryBuilder {

  protected table: string
  protected client: HttpHandlerInterface

  constructor(table: string, client: HttpHandlerInterface) {
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