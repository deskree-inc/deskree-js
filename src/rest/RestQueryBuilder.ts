import { HttpHandlerInterface } from "../HttpHandler"
import { SelectParamsDataType } from "./types"

interface RestQueryBuilderDataType {
  select(params?: SelectParamsDataType): any;
  insert(body: object): any;
}

export class RestQueryBuilder implements RestQueryBuilderDataType {

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

  insert(body: object) {
    return this.client.post(this.table, body)
  }

}