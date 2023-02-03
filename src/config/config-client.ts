import { HttpHandler, HttpHandlerInterface } from '../http-handler'
import { RequestOptions } from '../request-options'
import { formatModelDataTypes, formatModelTypes } from './utils/format-data-types'
import fs from 'fs';

export class ConfigClient {

  protected client: HttpHandlerInterface
  protected path: string = "/config"

  constructor(opts: RequestOptions) {
    this.client = opts.http === undefined ? new HttpHandler(opts.url, opts.axios) : opts.http
    this.client.createInstance(this.path, { 'deskree-admin': opts.options.adminToken })
  }

  /**
   * Get schema for the selected database
   * @param table table name
   * @param format default or formatted
   * @returns schema types of the selected database
   */
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

  /**
   * Generate types for all of the database schemas and saves a new file to the root directory of your project
   * @returns new file with types of the project's database
   */
  async generateDataTypes(path: string = './deskree-types.ts'): Promise<void> {
    try {
      const { data } = await this.client.get('/collections')
      const schemas: SchemaDataType[] = data.data

      if (fs.existsSync(path)) fs.unlink(path, e => { if (e) console.log(e) })

      for (const schema of schemas) {
        const schemaName = schema.attributes.name
        const formattedTypeName = schemaName.charAt(0).toUpperCase() + schemaName.slice(1) + 'DataType'

        const model = schema.attributes.model
        const formattedModel = formatModelDataTypes(model)
        const finalModel = JSON.stringify(formattedModel, null, '\t').replace(/\"/g, '')

        const content = `type ${formattedTypeName} = ${finalModel}\n\n`

        fs.appendFile(path, content, e => { if (e) console.log(e) })
      }
    } catch (e) {
      throw e
    }
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