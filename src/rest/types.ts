export type SelectParamsDataType = {
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