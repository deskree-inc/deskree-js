import { DeskreeClient } from '../DeskreeClient';

describe('Testing REST Module', () => {
  let client: DeskreeClient;

  beforeEach(() => {
    client = new DeskreeClient('deskree-sdk')
  })

  test('GENERAL SUCCESS - Check for table with no entries', async () => {
    const { data } = await client.rest.from('users').select()
    expect(data).toEqual({ meta: { total: 0 }, data: [] })
  })

  test('PAGE - Get first page of products', async () => {
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

  test('LIMIT - Limit response list to 2 products', async () => {
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

  test('WHERE - Get a product where its name is Desk ', async () => {
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

  test('GENERAL FAIL - Check for inexistent table', async () => {
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
})