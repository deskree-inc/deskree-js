export type GetParamsDataType = {
  includes?: string[]
  page?: number
  limit?: number
  where?: WhereDataType[] | string
  'sorted[how]'?: 'asc' | 'desc'
  'sorted[param]'?: string
}

export type WhereDataType = {
  attribute: string
  operator: string
  value: string
}

export type RestQueryBuilderDataType = {
  get(params?: GetParamsDataType): any
  getByUID(uid: string): any
  insert(body: object): any
  update(uid: string, params: object): any
  delete(uid: string): any
}