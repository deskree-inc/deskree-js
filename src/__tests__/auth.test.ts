import { DeskreeClient } from '../DeskreeClient'
import { AuthResponse } from '../mocks/auth/AuthResponse'
import { AuthMockHandler } from '../mocks/auth/AuthMockHandler'

describe('Testing AUTH Module', () => {
  let response: AuthResponse = new AuthResponse()
  let mock_active = process.env.MOCK_ACTIVE !== undefined && process.env.MOCK_ACTIVE === 'false' ? false : true

  test('SUCCESS: Sign Up With Email And Password', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskreesdk') : new DeskreeClient('deskreesdk', undefined, new AuthMockHandler(response.signUpWithEmailAndPasswordSetupSuccess()))
    const { data } = await client.auth.signUpWithEmailAndPassword('email@email.com', 'password')
    expect(data.data.email).toEqual('user@example.com')
  })

  test('FAIL: Sign Up With Email And Password - Setup not complete', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new AuthMockHandler(response.signUpWithEmailAndPasswordSetupNotComplete()))
    try {
      await client.auth.signUpWithEmailAndPassword('email@email.com', 'password')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('Email/password setup is not complete. Please complete the Email/Password Authentication setup in your project')
    }
  })

  test('FAIL: Sign Up With Email And Password - Email already in use', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new AuthMockHandler(response.signUpWithEmailAndPasswordEmailAlreadyInUse()))
    try {
      await client.auth.signUpWithEmailAndPassword('email@email.com', 'password')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('The email address is already in use by another account.')
    }
  })

  test('SUCCESS: Sign In With Email And Password', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskreesdk') : new DeskreeClient('deskreesdk', undefined, new AuthMockHandler(response.signUpWithEmailAndPasswordSetupSuccess()))
    const { data } = await client.auth.signInWithEmailAndPassword('email@email.com', 'password')
    expect(data.data.email).toEqual('user@example.com')
  })

  test('FAIL: Sign In With Email And Password - Email not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new AuthMockHandler(response.signInWithEmailAndPasswordEmailNotFound()))
    try {
      await client.auth.signInWithEmailAndPassword('inexistent_email@email.com', 'password')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('EMAIL_NOT_FOUND')
    }
  })

  test('FAIL: Sign In With Email And Password - Invalid password', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new AuthMockHandler(response.signInWithEmailAndPasswordEmailNotFound()))
    try {
      await client.auth.signInWithEmailAndPassword('email@email.com', 'invalid_password')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('INVALID_PASSWORD')
    }
  })

})