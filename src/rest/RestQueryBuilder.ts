import { HttpHandlerInterface } from '../HttpHandler'
import { GetParamsDataType } from './types'

interface RestQueryBuilderDataType {
  get(params?: GetParamsDataType): any
  insert(body: object): any
  update(id: string, params: object): any
  delete(id: string): any
}

export class RestQueryBuilder implements RestQueryBuilderDataType {

  protected table: string
  protected client: HttpHandlerInterface

  constructor(table: string, client: HttpHandlerInterface) {
    this.table = table
    this.client = client
  }

  get(params?: GetParamsDataType) {
    if (params && params.where) {
      params.where = JSON.stringify(params.where)
    }

    return this.client.get(this.table, { params })
  }

  insert(body: object) {
    return this.client.post(this.table, body)
  }

  update(id: string, params: object) {
    return this.client.patch(`${this.table}/${id}`, params)
  }

  delete(id: string) {
    return this.client.delete(`${this.table}/${id}`)
  }

}