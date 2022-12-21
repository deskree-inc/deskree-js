import { describe, test, expect } from 'vitest'
import { DeskreeClient } from '../deskree-client'
import { AuthResponse } from './mocks/auth-response'
import { AuthMockHandler } from './mocks/auth-mock-handler'

/**
 * The project deskree-sdk is setup with all authentication providers,
 * whereas the project deskreesdk is not setup with any authentication providers.
 * 
 * Use each one to test success 
 */

describe('Testing AUTH Module', () => {
  let response: AuthResponse = new AuthResponse()
  let mock_active = process.env.MOCK_ACTIVE !== undefined && process.env.MOCK_ACTIVE === 'false' ? false : true

  test('SUCCESS: Sign Up With Email And Password', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskreesdk') : new DeskreeClient('deskreesdk', undefined, new AuthMockHandler(response.signUpWithEmailAndPasswordSetupSuccess()))
    const { data } = await client.auth.signUpWithEmailAndPassword('email@email.com', 'password')
    expect(data.email).toEqual('user@example.com')
  })

  test('FAIL: Sign Up With Email And Password - Setup not complete', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new AuthMockHandler(response.signUpWithEmailAndPasswordSetupNotComplete()))
    try {
      await client.auth.signUpWithEmailAndPassword('email@email.com', 'password')
    } catch (e: any) {
      console.log('ERRORRRRRRR: ', e.response);

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
    expect(data.email).toEqual('user@example.com')
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

  test('SUCCESS: Create URL for OAuth Sign In', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskreesdk') : new DeskreeClient('deskreesdk', undefined, new AuthMockHandler(response.createUrlForOAuthSignInSuccess()))
    const { data } = await client.auth.createUrlForOAuthSignIn('google.com', 'http://localhost')
    expect(data).toEqual({})
  })

  test('FAIL: Create URL for OAuth Sign In - Identity provider configuration not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient('deskree-sdk') : new DeskreeClient('deskree-sdk', undefined, new AuthMockHandler(response.createUrlForOAuthSignInIdentityProviderConfigNotFound()))
    try {
      await client.auth.createUrlForOAuthSignIn('google.com', 'http://localhost')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('OPERATION_NOT_ALLOWED : The identity provider configuration is not found.')
    }
  })

})