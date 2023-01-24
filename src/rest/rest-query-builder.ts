import { HttpHandlerInterface } from '../http-handler'
import { CreateParamsDataType, GetByUIDParamsDataType, GetParamsDataType, RestQueryBuilderDataType, UpdateParamsDataType } from './types'

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
   * Perform a select query
   * @param params 
   * @returns 
   */
  getByUID(uid: string, params?: GetByUIDParamsDataType) {
    return this.client.get(`${this.table}/${uid}`, { params })
  }

  /**
   * Perform an create query
   * @param body 
   * @returns 
   */
  create(body: object, params?: CreateParamsDataType) {
    return this.client.post(this.table, body, { params })
  }

  /**
   * Perform an update query
   * @param uid 
   * @param params 
   * @returns 
   */
  update(uid: string, body: object, params?: UpdateParamsDataType) {
    return this.client.patch(`${this.table}/${uid}`, body, { params })
  }

  /**
   * Perform a delete query
   * @param uid 
   * @returns 
   */
  delete(uid: string) {
    return this.client.delete(`${this.table}/${uid}`)
  }

}