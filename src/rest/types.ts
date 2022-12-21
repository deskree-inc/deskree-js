export type GetParamsDataType = {
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
  insert(body: object): any
  update(id: string, params: object): any
  delete(id: string): any
}