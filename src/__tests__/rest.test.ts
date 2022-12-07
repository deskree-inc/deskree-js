import { DeskreeClient } from '../DeskreeClient';
import { RestMockHandler } from '../mocks/RestMockHandler';
import { RestResponse } from '../mocks/RestResponse';

describe('Testing REST Module', () => {
  let response: RestResponse = new RestResponse();
  let mock_active = process.env.MOCK_ACTIVE !== undefined && process.env.MOCK_ACTIVE === "false" ? false : true;

  test('SELECT: GENERAL SUCCESS - Check for table with no entries', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new RestMockHandler(response.getEmpty()))
    const { data } = await client.rest.from('users').select()
    expect(data).toEqual({ meta: { total: 0 }, data: [] })
  })

  test('SELECT: GENERAL FAIL - Check for inexistent table', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new RestMockHandler(response.getError()));
    expect.assertions(1);
    try {
      await client.rest.from('table-does-not-exist').select()
    } catch (e: any) {
      expect(e.response.data).toEqual({
        errors: [{
          code: '500',
          title: 'Internal Server Error',
          detail: 'Bad collection configuration object: no endpoint configuration found.'
        }]
      });
    }
  })

  test('SELECT: PAGE - Get first page of products', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new RestMockHandler(response.getPage()))
    const { data } = await client.rest.from('products').select({ page: 1 })
    expect(data).toEqual({
      meta: {
        total: 6,
        page: '1'
      },
      data: [
        {
          uid: 'BPJcWcDwV4wzNaQxI7es',
          attributes: {
            author: '',
            createdAt: '2022-12-06T15:33:38-03:00',
            updatedAt: '2022-12-06T15:33:38-03:00',
            name: 'Desk',
            price: 199.9
          }
        },
        {
          uid: 'BwtNyX8bnFSelJVEMaX3',
          attributes: {
            price: 1229.9,
            createdAt: '2022-12-06T15:36:05-03:00',
            author: '',
            updatedAt: '2022-12-06T15:36:05-03:00',
            name: 'Computer'
          }
        },
        {
          uid: 'BzUP4ZRKnReS2dv9vf0l',
          attributes: {
            author: '',
            name: 'Cellphone',
            updatedAt: '2022-12-06T15:36:15-03:00',
            createdAt: '2022-12-06T15:36:15-03:00',
            price: 999.9
          }
        },
        {
          uid: 'KeFEQjteBn01kY9mMzn5',
          attributes: {
            name: 'Audio Interface',
            author: '',
            updatedAt: '2022-12-06T15:35:53-03:00',
            price: 149.9,
            createdAt: '2022-12-06T15:35:53-03:00'
          }
        },
        {
          uid: 'bwdh0xB5i9hFDc8dIQ2m',
          attributes: {
            price: 49.9,
            name: 'Table',
            author: '',
            updatedAt: '2022-12-06T15:35:42-03:00',
            createdAt: '2022-12-06T15:35:42-03:00'
          }
        },
        {
          uid: 'twQ75gheDnKz0ldMGrwe',
          attributes: {
            createdAt: '2022-12-06T15:35:31-03:00',
            updatedAt: '2022-12-06T15:35:31-03:00',
            name: 'Booth',
            price: 19.9,
            author: ''
          }
        }
      ]
    })
  })

  test('SELECT: LIMIT - Limit response list to 2 products', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new RestMockHandler(response.getLimit()))
    const { data } = await client.rest.from('products').select({ limit: 2 })
    expect(data).toEqual({
      meta: {
        total: 6,
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

  test('SELECT: WHERE - Get a product where its name is Desk ', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new RestMockHandler(response.getWhere()))
    const { data } = await client.rest.from('products').select({
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
        total: 1
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

  test('SELECT: SORTED[PARAM] - Return products ascending by name', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new RestMockHandler(response.getSortingAsc()))
    const { data } = await client.rest.from('products').select({ 'sorted[param]': 'name' })
    expect(data).toEqual({
      meta: {
        total: 6
      },
      data: [
        {
          uid: 'KeFEQjteBn01kY9mMzn5',
          attributes: {
            updatedAt: '2022-12-06T15:35:53-03:00',
            name: 'Audio Interface',
            author: '',
            price: 149.9,
            createdAt: '2022-12-06T15:35:53-03:00'
          }
        },
        {
          uid: 'twQ75gheDnKz0ldMGrwe',
          attributes: {
            name: 'Booth',
            author: '',
            updatedAt: '2022-12-06T15:35:31-03:00',
            price: 19.9,
            createdAt: '2022-12-06T15:35:31-03:00'
          }
        },
        {
          uid: 'BzUP4ZRKnReS2dv9vf0l',
          attributes: {
            updatedAt: '2022-12-06T15:36:15-03:00',
            author: '',
            name: 'Cellphone',
            price: 999.9,
            createdAt: '2022-12-06T15:36:15-03:00'
          }
        },
        {
          uid: 'BwtNyX8bnFSelJVEMaX3',
          attributes: {
            updatedAt: '2022-12-06T15:36:05-03:00',
            createdAt: '2022-12-06T15:36:05-03:00',
            price: 1229.9,
            name: 'Computer',
            author: ''
          }
        },
        {
          uid: 'BPJcWcDwV4wzNaQxI7es',
          attributes: {
            price: 199.9,
            updatedAt: '2022-12-06T15:33:38-03:00',
            name: 'Desk',
            author: '',
            createdAt: '2022-12-06T15:33:38-03:00'
          }
        },
        {
          uid: 'bwdh0xB5i9hFDc8dIQ2m',
          attributes: {
            createdAt: '2022-12-06T15:35:42-03:00',
            name: 'Table',
            price: 49.9,
            updatedAt: '2022-12-06T15:35:42-03:00',
            author: ''
          }
        }
      ]
    })
  })

  test('SELECT: SORTED[PARAM] + SORTED[HOW] - Return products descending by price', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new RestMockHandler(response.getSortingDesc()))
    const { data } = await client.rest.from('products').select({
      'sorted[how]': 'desc',
      'sorted[param]': 'price'
    })
    expect(data).toEqual({
      meta: {
        total: 6
      },
      data: [
        {
          uid: 'BwtNyX8bnFSelJVEMaX3',
          attributes: {
            price: 1229.9,
            name: 'Computer',
            author: '',
            updatedAt: '2022-12-06T15:36:05-03:00',
            createdAt: '2022-12-06T15:36:05-03:00'
          }
        },
        {
          uid: 'BzUP4ZRKnReS2dv9vf0l',
          attributes: {
            price: 999.9,
            createdAt: '2022-12-06T15:36:15-03:00',
            updatedAt: '2022-12-06T15:36:15-03:00',
            name: 'Cellphone',
            author: ''
          }
        },
        {
          uid: 'BPJcWcDwV4wzNaQxI7es',
          attributes: {
            author: '',
            name: 'Desk',
            updatedAt: '2022-12-06T15:33:38-03:00',
            createdAt: '2022-12-06T15:33:38-03:00',
            price: 199.9
          }
        },
        {
          uid: 'KeFEQjteBn01kY9mMzn5',
          attributes: {
            createdAt: '2022-12-06T15:35:53-03:00',
            updatedAt: '2022-12-06T15:35:53-03:00',
            name: 'Audio Interface',
            price: 149.9,
            author: ''
          }
        },
        {
          uid: 'bwdh0xB5i9hFDc8dIQ2m',
          attributes: {
            createdAt: '2022-12-06T15:35:42-03:00',
            author: '',
            name: 'Table',
            updatedAt: '2022-12-06T15:35:42-03:00',
            price: 49.9
          }
        },
        {
          uid: 'twQ75gheDnKz0ldMGrwe',
          attributes: {
            name: 'Booth',
            createdAt: '2022-12-06T15:35:31-03:00',
            price: 19.9,
            author: '',
            updatedAt: '2022-12-06T15:35:31-03:00'
          }
        }
      ]
    })
  })

  // test('INSERT: SUCCESS - Add product to products table', async () => {
  //   let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new RestMockHandler(response.insert()))
  //   const { data } = await client.rest.from('products').insert({ name: 'New product', price: 9.90 })
  //   expect(data).toEqual({
  //     meta: { total: 1 }, data: [{
  //       uid: 'BPJcWcDwV4wzNaQxI7es',
  //       attributes: {
  //         author: '',
  //         createdAt: '2022-12-06T15:33:38-03:00',
  //         updatedAt: '2022-12-06T15:33:38-03:00',
  //         name: 'New product',
  //         price: 9.9
  //       }
  //     }]
  //   })
  // })

})

