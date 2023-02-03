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
  async getSchema(options: GetSchemaOptions): Promise<any> {

    const { table, format, database } = options

    const useFormat = format ? format : 'default'

    try {
      // Get all collections from the user's selected database
      const { data } = await this.client.get('/collections')

      // Get schema selected by the user
      const schemas: SchemaDataType[] = data.data
      const schema = schemas.find(schema => schema.attributes.name === table.toLowerCase())

      // Return default or formatted JSON schema to the user
      if (schema &&
        Object.prototype.hasOwnProperty.call(schema, "attributes") &&
        Object.prototype.hasOwnProperty.call(schema.attributes, "model")) {

        const model = schema.attributes.model

        switch (useFormat) {
          case 'default':
            return { data: model }

          case 'formatted':
            return { data: formatModelTypes(model) }
        }

      } else {
        // Return an error if the specified table does not exist
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
  async generateDataTypes(options: GenerateDataTypesDataType = {}): Promise<void> {

    const { path, fileName, database } = options

    const usePath = path ? path : './'
    const useFileName = fileName ? fileName : 'deskree-types.interface.ts'

    try {
      // Get all collections from the user's selected database
      const { data } = await this.client.get('/collections')
      const schemas: SchemaDataType[] = data.data

      // Create full path with path + file name and remove all spaces from these strings
      const fullPath = (usePath + useFileName).replace(/\s/g, '')

      // Remove previous outdated file if needed
      if (fs.existsSync(fullPath)) fs.unlink(fullPath, e => { if (e) console.log(e) })

      // Loop through all database schemas  
      for (const schema of schemas) {

        // Get schema name and format it to schema name starting with capital letter + DataType
        const schemaName = schema.attributes.name
        const formattedTypeName = schemaName.charAt(0).toUpperCase() + schemaName.slice(1) + 'DataType'

        // Get model and format it accordingly
        const model = schema.attributes.model
        const formattedModel = formatModelDataTypes(model)
        const finalModel = JSON.stringify(formattedModel, null, '\t').replace(/\"/g, '')

        // Export type for each schema as a content
        const content = `export type ${formattedTypeName} = ${finalModel}\n\n`

        // And append each content to the file created
        fs.appendFile(fullPath, content, e => { if (e) console.log(e) })
      }
    } catch (e) {
      throw e
    }
  }
}

type GenerateDataTypesDataType = {
  path?: string
  fileName?: string
  database?: string
}

type GetSchemaOptions = {
  table: string
  format?: "default" | "formatted"
  database?: "default"
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