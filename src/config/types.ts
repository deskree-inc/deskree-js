export type GenerateDataTypesDataType = {
  path?: string
  fileName?: string
  database?: string
}

export type GetSchemaOptions = {
  table: string
  format?: "default" | "formatted"
  database?: "default"
}

export type SchemaDataType = {
  uid: string,
  attributes: SchemaAttributesDataType
}

export type SchemaAttributesDataType = {
  order: number,
  name: string,
  config: SchemaAttributesConfigDataType,
  subCollections: any[],
  model: any
}

export type SchemaAttributesConfigDataType = {
  updatedAt: boolean,
  timezone: string,
  createdAt: boolean
}