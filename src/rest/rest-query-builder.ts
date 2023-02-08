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
    try {
      return this.client.get(`${this.table}/${uid}`, { params })
    } catch (e) {
      throw e
    }
  }

  /**
   * Perform an create query
   * @param body 
   * @returns 
   */
  create(body: object, params?: CreateParamsDataType) {
    try {
      return this.client.post(this.table, body, { params })
    } catch (e) {
      throw e
    }
  }

  /**
   * Perform an update query
   * @param uid 
   * @param params 
   * @returns 
   */
  update(uid: string, body: object, params?: UpdateParamsDataType) {
    try {
      return this.client.patch(`${this.table}/${uid}`, body, { params })
    } catch (e) {
      throw e
    }
  }

  /**
   * Perform a delete query
   * @param uid 
   * @returns 
   */
  delete(uid: string) {
    try {
      return this.client.delete(`${this.table}/${uid}`)
    } catch (e) {
      throw e
    }
  }

}