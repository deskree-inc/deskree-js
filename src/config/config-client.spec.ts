import { describe, test, expect } from 'vitest'
import { DeskreeClient } from '../deskree-client'
import { ConfigResponse } from './mocks/config-response'
import { ConfigMockHandler } from './mocks/config-mock-handler'

describe('Testing Config Module', () => {
  let response: ConfigResponse = new ConfigResponse()
  const projectId = 'feedback-tool'
  const adminToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXNrcmVlX2lkIjoiZmVlZGJhY2stdG9vbCIsImdjcF9pZCI6ImRlc2tyZWUtMGZiOGJmODMtMDEzYy00YzgyLWEiLCJrZXlfdmVyc2lvbiI6IjEifQ.tTUzquVRb456HBxZXCFrlRwX2brNLEMWXZ8y8V7eX4+Sv0yqlizmAHhD9fTJe3NZIJ+QbzvVnnHMnUY/cezDEilQE5Ghm/yrfVR+agFjW/vyDGmkMlm2RqCywIzWeSD1plmFmF7ryvAtn+u6OSRH4IESPpAa08fxJr5IQePN9dB8RI8+4QNWAuU4HAsBsQi4aVtL9qm7dsRZhXadDvE7EjCa0kd1LM/xjhFgbG+6KtDGjFBG/oRernSqObm+8aRnMos6JEi1Jd/Sfuoa/J8+ziuAh2WePgOLV/6Ml33F2vlEaIO+dUPHxzpDQ54d2XsmWJxef9qnE0SuIVzRhIwi3A=='
  let mock_active = process.env.MOCK_ACTIVE !== undefined && process.env.MOCK_ACTIVE === 'false' ? false : true

  test('SUCCESS - Get default schema', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId, adminToken }) : new DeskreeClient({ projectId, adminToken, host: undefined, http: new ConfigMockHandler(response.getDefaultSchema()) })
    const { data } = await client.config().getSchema({ table: 'users' })

    expect(data).toEqual({
      email: 'String',
      roles: 'Array<string>',
      updatedAt: 'String?',
      createdAt: 'String?',
      uid: 'UID'
    })
  })

  test('SUCCESS - Get formatted schema', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId, adminToken }) : new DeskreeClient({ projectId, adminToken, host: undefined, http: new ConfigMockHandler(response.getFormattedSchema()) })
    const { data } = await client.config().getSchema({ table: 'users', format: 'formatted' })
    expect(data).toEqual({
      uid: {
        type: 'string',
        isOptional: false
      },
      roles: {
        type: 'string[]',
        isOptional: false
      },
      updatedAt: {
        type: 'string',
        isOptional: true
      },
      createdAt: {
        type: 'string',
        isOptional: true
      },
      email: {
        type: 'string',
        isOptional: false
      }
    })
  })

  test('FAIL - Check for inexistent table', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId, adminToken }) : new DeskreeClient({ projectId, adminToken, host: undefined, http: new ConfigMockHandler(response.getSchemaNoTableFound()) })
    try {
      await client.config().getSchema({ table: 'this-is-not-a-valid-table' })
    } catch (e: any) {
      expect(e.response.data).toEqual({
        data: {
          message: 'The specified table does not exist.'
        }
      })
    }
  })

  test('FAIL - Try to get default schema without passing the admin token', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId }) : new DeskreeClient({ projectId, host: undefined, http: new ConfigMockHandler(response.getSchemaWithoutAdminToken()) })
    try {
      await client.config().getSchema({ table: 'users' })
    } catch (e) {
      expect(e.response.data.errors[0].title).toEqual('Forbidden')
    }
  })

  test('FAIL - Try to get formatted schema without passing the admin token', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId }) : new DeskreeClient({ projectId, host: undefined, http: new ConfigMockHandler(response.getSchemaWithoutAdminToken()) })
    try {
      await client.config().getSchema({ table: 'users', format: 'formatted' })
    } catch (e) {
      expect(e.response.data.errors[0].title).toEqual('Forbidden')
    }
  })

  test('FAIL - Try to get an inexisting table without passing the admin token', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId }) : new DeskreeClient({ projectId, host: undefined, http: new ConfigMockHandler(response.getSchemaWithoutAdminToken()) })
    try {
      await client.config().getSchema({ table: 'this-is-not-a-valid-table' })
    } catch (e) {
      expect(e.response.data.errors[0].title).toEqual('Forbidden')
    }
  })

})