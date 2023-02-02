import { HttpHandler, HttpHandlerInterface } from '../http-handler'
import { RequestOptions } from '../request-options'
import { formatModelTypes } from './utils/format-data-types'

export class ConfigClient {

  protected client: HttpHandlerInterface
  protected path: string = "/config"

  constructor(opts: RequestOptions) {
    this.client = opts.http === undefined ? new HttpHandler(opts.url, opts.axios) : opts.http
    this.client.createInstance(this.path, { 'deskree-admin': opts.options.adminToken })
  }

  async getSchema(table: string, format: 'default' | 'formatted' = 'default'): Promise<any> {
    try {
      const { data } = await this.client.get('/collections')

      const schemas: SchemaDataType[] = data.data
      const schema = schemas.find(schema => schema.attributes.name === table.toLowerCase())

      if (schema &&
        Object.prototype.hasOwnProperty.call(schema, "attributes") &&
        Object.prototype.hasOwnProperty.call(schema.attributes, "model")) {

        const model = schema.attributes.model

        switch (format) {
          case 'default':
            return { data: model }

          case 'formatted':
            return { data: formatModelTypes(model) }
        }

      } else {
        return {
          data: {
            message: 'The specified table does not exist.'
          }
        }
      }
    } catch (e) {
      throw e
    }
  }

  // TODO: Get data types and save it to a file
  async getDataTypes() {
    // try {
    //   const { data } = await this.client.get('/collections')
    //   return data
    // } catch (e) {
    //   throw e
    // }
  }



}

type SchemaDataType = {
  uid: string,
  attributes: SchemaAttributesDataType
}

type SchemaAttributesDataType = {
  order: number,
  name: string,
  config: SchemaAttributesConfigDataType,
  subCollections: any[],
  model: any
}

type SchemaAttributesConfigDataType = {
  updatedAt: boolean,
  timezone: string,
  createdAt: boolean
}