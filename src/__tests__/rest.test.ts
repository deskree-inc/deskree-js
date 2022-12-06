import { DeskreeClient } from "../DeskreeClient";

describe('Testing REST Module', () => {
  let client: DeskreeClient;

  beforeEach(() => {
    client = new DeskreeClient('deskree-sdk')
  })

  test('Check for empty users table', async () => {
    const { data } = await client.rest.from('users').select()
    expect(data).toEqual({ meta: { total: 0 }, data: [] })
  })

  test('Check for inexistent table', async () => {
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