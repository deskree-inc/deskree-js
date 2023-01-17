import { describe, test, expect, expectTypeOf } from 'vitest'
import { DeskreeClient } from '../deskree-client'
import { RestResponse } from './mocks/rest-response'
import { RestMockHandler } from './mocks/rest-mock-handler'
import { ProductDataRestInterface, ProductsRestDataType } from './mocks/rest-interfaces'

describe('Testing REST Module', () => {
  let response: RestResponse = new RestResponse()
  let mock_active = process.env.MOCK_ACTIVE !== undefined && process.env.MOCK_ACTIVE === 'false' ? false : true
  let addedProduct: any;

  test('GET: GENERAL SUCCESS - Check for table with no entries', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.getEmpty())})
    const { data } = await client.database().from('users').get()
    expect(data).toEqual({ meta: { total: expect.any(Number) }, data: [] })
  })

  test('GET: GENERAL FAIL - Check for inexistent table', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.getError())})
    try {
      await client.database().from('table-does-not-exist').get()
    } catch (e: any) {
      expect(e.response.data).toEqual({
        errors: [{
          code: '500',
          title: 'Internal Server Error',
          detail: 'Bad collection configuration object: no endpoint configuration found.'
        }]
      })
    }
  })

  test('GET: PAGE - Get first page of products and limit to 5 results', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.getPage())})
    const { data }: ProductsRestDataType = await client.database().from('products').get({ page: 1, limit: 5 })

    expectTypeOf(data.meta.total).toBeNumber()
    expectTypeOf(data.meta.page).toBeString()
    expectTypeOf(data.meta.limit).toBeString()

    data.data.map((product: ProductDataRestInterface) => {
      expectTypeOf(product).toHaveProperty('uid')
      expectTypeOf(product).toHaveProperty('attributes')
      expectTypeOf(product.attributes).toHaveProperty('name')
      expectTypeOf(product.attributes).toHaveProperty('price')
      expectTypeOf(product.attributes).toHaveProperty('author')
      expectTypeOf(product.attributes).toHaveProperty('createdAt')
      expectTypeOf(product.attributes).toHaveProperty('updatedAt')

      expectTypeOf(product.uid).toBeString()
      expectTypeOf(product.attributes.name).toBeString()
      expectTypeOf(product.attributes.price).toBeNumber()
      expectTypeOf(product.attributes.author).toBeString()
      expectTypeOf(product.attributes.createdAt).toBeString()
      expectTypeOf(product.attributes.updatedAt).toBeString()
    })
  })

  test('GET: LIMIT - Limit response list to 2 products', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.getLimit())})
    const { data } = await client.database().from('products').get({ limit: 2 })
    expect(data).toEqual({
      meta: {
        total: expect.any(Number),
        limit: '2'
      },
      data: [
        {
          uid: 'BPJcWcDwV4wzNaQxI7es',
          attributes: {
            author: '',
            updatedAt: '2022-12-06T15:33:38-03:00',
            name: 'Desk',
            price: 199.9,
            createdAt: '2022-12-06T15:33:38-03:00'
          }
        },
        {
          uid: 'BwtNyX8bnFSelJVEMaX3',
          attributes: {
            createdAt: '2022-12-06T15:36:05-03:00',
            author: '',
            updatedAt: '2022-12-06T15:36:05-03:00',
            price: 1229.9,
            name: 'Computer'
          }
        }
      ]
    })
  })

  test('GET: WHERE - Get a product where its name is Desk ', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.getWhere())})
    const { data } = await client.database().from('products').get({
      where: [
        {
          attribute: 'name',
          operator: '=',
          value: 'Desk'
        },
      ]
    })
    expect(data).toEqual({
      meta: {
        total: expect.any(Number)
      },
      data: [
        {
          uid: 'BPJcWcDwV4wzNaQxI7es',
          attributes: {
            updatedAt: '2022-12-06T15:33:38-03:00',
            name: 'Desk',
            price: 199.9,
            author: '',
            createdAt: '2022-12-06T15:33:38-03:00'
          }
        }
      ]
    })
  })

  test('GET: SORTED[PARAM] - Return products ascending by name', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.getSortingAsc())})
    const { data } = await client.database().from('products').get({ 'sorted[param]': 'name' })

    expectTypeOf(data.meta.total).toBeNumber()

    data.data.map((product: ProductDataRestInterface) => {
      expectTypeOf(product).toHaveProperty('uid')
      expectTypeOf(product).toHaveProperty('attributes')
      expectTypeOf(product.attributes).toHaveProperty('name')
      expectTypeOf(product.attributes).toHaveProperty('price')
      expectTypeOf(product.attributes).toHaveProperty('author')
      expectTypeOf(product.attributes).toHaveProperty('createdAt')
      expectTypeOf(product.attributes).toHaveProperty('updatedAt')

      expectTypeOf(product.uid).toBeString()
      expectTypeOf(product.attributes.name).toBeString()
      expectTypeOf(product.attributes.price).toBeNumber()
      expectTypeOf(product.attributes.author).toBeString()
      expectTypeOf(product.attributes.createdAt).toBeString()
      expectTypeOf(product.attributes.updatedAt).toBeString()
    })
  })

  test('GET: SORTED[PARAM] + SORTED[HOW] - Return products descending by price', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.getSortingDesc())})
    const { data } = await client.database().from('products').get({
      'sorted[how]': 'desc',
      'sorted[param]': 'price'
    })

    expectTypeOf(data.meta.total).toBeNumber()

    data.data.map((product: ProductDataRestInterface) => {
      expectTypeOf(product).toHaveProperty('uid')
      expectTypeOf(product).toHaveProperty('attributes')
      expectTypeOf(product.attributes).toHaveProperty('name')
      expectTypeOf(product.attributes).toHaveProperty('price')
      expectTypeOf(product.attributes).toHaveProperty('author')
      expectTypeOf(product.attributes).toHaveProperty('createdAt')
      expectTypeOf(product.attributes).toHaveProperty('updatedAt')

      expectTypeOf(product.uid).toBeString()
      expectTypeOf(product.attributes.name).toBeString()
      expectTypeOf(product.attributes.price).toBeNumber()
      expectTypeOf(product.attributes.author).toBeString()
      expectTypeOf(product.attributes.createdAt).toBeString()
      expectTypeOf(product.attributes.updatedAt).toBeString()
    })
  })

  test('INSERT: SUCCESS - Add product to products table', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.insertSuccess())})
    const { data } = await client.database().from('products').insert({ name: 'New product', price: 9.90 })

    addedProduct = data.data

    expectTypeOf(data.data.uid).toBeString()
    expectTypeOf(data.data.name).toBeString()
    expectTypeOf(data.data.price).toBeNumber()
    expectTypeOf(data.data.author).toBeString()
    expectTypeOf(data.data.createdAt).toBeString()
    expectTypeOf(data.data.updatedAt).toBeString()
  })

  test('INSERT: FAIL - Try to add a product to the products table, but missing the required parameter name', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.insertFail())})
    try {
      await client.database().from('products').insert({ price: 9.90 })
    } catch (e: any) {
      expect(e.response.data).toEqual({
        errors: [
          {
            propertyErrors: [],
            typeErrors: [],
            propertyMissingErrors: [
              {
                code: '422',
                title: 'Unprocessable Entry',
                detail: expect.any(String)
              }
            ]
          }
        ]
      })
    }
  })

  test('UPDATE: SUCCESS - Update a product price using its id', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.updateSuccess(addedProduct))})
    const { data } = await client.database().from('products').update(addedProduct.uid, { price: 19.90 })

    expect(data.data.name).toEqual(addedProduct.name)
    expect(data.data.price).toEqual(19.9)
    expect(data.data.author).toEqual(addedProduct.author)
    expect(data.data.createdAt).toEqual(addedProduct.createdAt)
    expectTypeOf(data.data.updatedAt).toBeString()
  })

  test('UPDATE: FAIL - Try to update a product that does not exist', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.updateFail())})
    try {
      await client.database().from('products').update('invalid_uid', { price: 10 })
    } catch (e: any) {
      expect(e.response.data).toEqual({
        data: null,
        errors: {
          errors: [
            {
              code: '404',
              title: 'Not found',
              detail: 'Requested object is not found'
            }
          ]
        }
      })
    }
  })

  test('DELETE: SUCCESS - Delete a product', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.deleteSuccess())})
    const { data } = await client.database().from('products').delete(addedProduct.uid)
    expect(data).toEqual('')
  })

  test('DELETE: FAIL - Try to delete a product that does not exist', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: 'deskree-sdk' }) : new DeskreeClient({ projectId: 'deskree-sdk', host: undefined, http: new RestMockHandler(response.deleteFail())})
    try {
      await client.database().from('products').delete('invalid_uid')
    } catch (e: any) {
      expect(e.response.data).toEqual({
        data: null,
        errors: {
          errors: [
            {
              code: '404',
              title: 'Not found',
              detail: 'Requested object is not found'
            }
          ]
        }
      })
    }
  })

})