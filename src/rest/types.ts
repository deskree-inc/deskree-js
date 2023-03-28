export type GetParamsDataType = {
  includes?: string[]
  page?: number
  limit?: number
  where?: WhereDataType[] | string
  'sorted[how]'?: 'asc' | 'desc'
  'sorted[param]'?: string
}

export type GetByUIDParamsDataType = {
  includes?: string[]
}

export type CreateParamsDataType = {
  skipFileExceptions?: boolean
}

export type UpdateParamsDataType = {
  skipFileExceptions?: boolean
}

export type WhereDataType = {
  attribute: string
  operator: string
  value: string
}

export type RestQueryBuilderDataType = {
  get(params?: GetParamsDataType): any
  getByUID(uid: string, includes: GetByUIDParamsDataType): any
  create(body: object, params: CreateParamsDataType): any
  update(uid: string, body: object, params: UpdateParamsDataType): any
  delete(uid: string): any
}