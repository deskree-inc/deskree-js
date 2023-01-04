import { HttpHandlerInterface } from '../http-handler'
import { GetParamsDataType, RestQueryBuilderDataType } from './types'

export class RestQueryBuilder implements RestQueryBuilderDataType {

  protected table: string
  protected client: HttpHandlerInterface

  constructor(table: string, client: HttpHandlerInterface) {
    this.table = table
    this.client = client
  }

  /**
   * Perform a select query
   * @param params 
   * @returns 
   */
  get(params?: GetParamsDataType) {
    if (params && params.where) {
      params.where = JSON.stringify(params.where)
    }

    return this.client.get(this.table, { params })
  }

  /**
   * Perform an insert query
   * @param body 
   * @returns 
   */
  insert(body: object) {
    return this.client.post(this.table, body)
  }

  /**
   * Perform an update query
   * @param id 
   * @param params 
   * @returns 
   */
  update(id: string, params: object) {
    return this.client.patch(`${this.table}/${id}`, params)
  }

  /**
   * Perform a delete query
   * @param id 
   * @returns 
   */
  delete(id: string) {
    return this.client.delete(`${this.table}/${id}`)
  }

}