export type ProductDataRestInterface = {
  uid: string
  attributes: ProductAttributesRestInterface
}

export type ProductAttributesRestInterface = {
  author: string
  createdAt: string
  updatedAt: string
  name: string
  price: number
}

export type ProductMetaRestInterface = {
  total: number
}

export type ProductsMetaRestInterface = {
  total: number
  page: string
  limit: number
}

export type ProductRestInterface = {
  meta: ProductMetaRestInterface
  data: ProductDataRestInterface
}

export type ProductsRestInterface = {
  meta: ProductsMetaRestInterface
  data: ProductDataRestInterface[]
}

export type ProductRestDataType = {
  data: ProductRestInterface
}

export type ProductsRestDataType = {
  data: ProductsRestInterface
}