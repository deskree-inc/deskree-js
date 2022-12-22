import { describe, test, expect, expectTypeOf } from 'vitest'
import { DeskreeClient } from '../deskree-client'
import { AuthResponse } from './mocks/auth-response'
import { AuthMockHandler } from './mocks/auth-mock-handler'

describe('Testing AUTH Module', () => {
  let response: AuthResponse = new AuthResponse()
  let mock_active = process.env.MOCK_ACTIVE !== undefined && process.env.MOCK_ACTIVE === 'false' ? false : true

  const projectWithProvidersSetup = 'deskreesdk'
  const projectMissingProvidersSetup = 'deskree-sdk'

  test('SUCCESS: Sign Up With Email And Password', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.signUpWithEmailAndPasswordSetupSuccess()))
    const { data } = await client.auth.signUpWithEmailAndPassword('email@email.com', 'password')
    expect(data.email).toEqual('user@example.com')
  })

  test('FAIL: Sign Up With Email And Password - Setup not complete', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectMissingProvidersSetup) : new DeskreeClient(projectMissingProvidersSetup, undefined, new AuthMockHandler(response.signUpWithEmailAndPasswordSetupNotComplete()))
    try {
      await client.auth.signUpWithEmailAndPassword('email@email.com', 'password')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('Email/password setup is not complete. Please complete the Email/Password Authentication setup in your project')
    }
  })

  test('FAIL: Sign Up With Email And Password - Email already in use', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectMissingProvidersSetup) : new DeskreeClient(projectMissingProvidersSetup, undefined, new AuthMockHandler(response.signUpWithEmailAndPasswordEmailAlreadyInUse()))
    try {
      await client.auth.signUpWithEmailAndPassword('email@email.com', 'password')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('The email address is already in use by another account.')
    }
  })

  test('SUCCESS: Sign In With Email And Password', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.signUpWithEmailAndPasswordSetupSuccess()))
    const { data } = await client.auth.signInWithEmailAndPassword('email@email.com', 'password')
    expect(data.email).toEqual('user@example.com')
  })

  test('FAIL: Sign In With Email And Password - Email not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectMissingProvidersSetup) : new DeskreeClient(projectMissingProvidersSetup, undefined, new AuthMockHandler(response.signInWithEmailAndPasswordEmailNotFound()))
    try {
      await client.auth.signInWithEmailAndPassword('inexistent_email@email.com', 'password')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('EMAIL_NOT_FOUND')
    }
  })

  test('FAIL: Sign In With Email And Password - Invalid password', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectMissingProvidersSetup) : new DeskreeClient(projectMissingProvidersSetup, undefined, new AuthMockHandler(response.signInWithEmailAndPasswordEmailNotFound()))
    try {
      await client.auth.signInWithEmailAndPassword('email@email.com', 'invalid_password')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('INVALID_PASSWORD')
    }
  })

  test('SUCCESS: Create URL for OAuth Sign In With Google', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.createUrlForOAuthSignWithGoogleInSuccess()))
    const { data } = await client.auth.createUrlForOAuthSignIn('google.com', 'http://localhost')
    expect(data.data.providerId).toEqual('google.com')
  })

  test('SUCCESS: Create URL for OAuth Sign In With Facebook', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.createUrlForOAuthSignWithFacebookInSuccess()))
    const { data } = await client.auth.createUrlForOAuthSignIn('facebook.com', 'http://localhost')
    expect(data.data.providerId).toEqual('facebook.com')
  })

  test('SUCCESS: Create URL for OAuth Sign In With GitHub', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.createUrlForOAuthSignWithGitHubInSuccess()))
    const { data } = await client.auth.createUrlForOAuthSignIn('github.com', 'http://localhost')
    expect(data.data.providerId).toEqual('github.com')
  })

  test('FAIL: Create URL for OAuth Sign In - Identity provider configuration not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectMissingProvidersSetup) : new DeskreeClient(projectMissingProvidersSetup, undefined, new AuthMockHandler(response.createUrlForOAuthSignInIdentityProviderConfigNotFound()))
    try {
      await client.auth.createUrlForOAuthSignIn('google.com', 'http://localhost')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('OPERATION_NOT_ALLOWED : The identity provider configuration is not found.')
    }
  })

  // TODO: SUCCESS: Sign In With Google Success

  // TODO: SUCCESS: Sign In With Facebook Success

  // TODO: SUCCESS: Sign In With GitHub Success

  test('FAIL: Sign In With a Selected OAuth Provider - Identity provider configuration not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectMissingProvidersSetup) : new DeskreeClient(projectMissingProvidersSetup, undefined, new AuthMockHandler(response.createUrlForOAuthSignInIdentityProviderConfigNotFound()))
    try {
      await client.auth.signInWithOAuth('kasdoa0123-012sdasd', 'google.com', 'http://localhost', 'asdkpasd', '0aksd09d0jd091ij0')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('OPERATION_NOT_ALLOWED : The identity provider configuration is not found.')
    }
  })

  test('FAIL: Sign In With a Selected OAuth Provider - Invalid Google Token', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.singInWithOAuthInvalidGoogleToken()))
    try {
      await client.auth.signInWithOAuth('kasdoa0123-012sdasd', 'google.com', 'http://localhost', 'asdkpasd', '0aksd09d0jd091ij0')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('INVALID_IDP_RESPONSE : Unable to parse Google id_token: asdkpasd')
    }
  })

  test('SUCCESS: Invite User', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.inviteUserSuccess()))
    const { data } = await client.auth.inviteUser('user@email.com')
    expect(data).toEqual('')
  })

  test('FAIL: Invite User - No email provided', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.inviteUserNoEmailProvided()))
    try {
      await client.auth.inviteUser('')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('No email address provided')
    }
  })

  test('SUCCESS: Reset Password', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.resetPasswordSuccess()))
    const { data } = await client.auth.inviteUser('user@example.com')
    expect(data).toEqual('')
  })

  test('FAIL: Reset Password - Email not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.resetPasswordNoEmailFound()))
    try {
      await client.auth.resetPassword('')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('There is no user record corresponding to the provided email.')
    }
  })

  test('SUCCESS: Verify Email', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.resetPasswordSuccess()))
    const { data } = await client.auth.verifyEmail('na9uubnkloaf9n18n9u112u41', '0193j401nd18en18dj1nm29dn8nuk')
    expect(data).toEqual('')
  })

  test('FAIL: Verify Email - Email not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.verifyEmailNoUserFound()))
    try {
      await client.auth.verifyEmail('na9uubnkloaf9n18n9u112u41', '0193j401nd18en18dj1nm29dn8nuk')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('There is no user record corresponding to the provided identifier.')
    }
  })

  test('FAIL: Verify Email - Invalid OOB Code', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.verifyEmailInvalidOobCode()))
    try {
      await client.auth.verifyEmail('na9uubnkloaf9n18n9u112u41', '0193j401nd18en18dj1nm29dn8nuk')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('INVALID_OOB_CODE')
    }
  })

  // TODO: SUCCESS: Verify Passoword Reset

  test('FAIL: Verify Password Reset - Invalid OOB Code', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.verifyEmailInvalidOobCode()))
    try {
      await client.auth.verifyPasswordReset('na9uubnkloaf9n18n9u112u41', '0193j401nd18en18dj1nm29dn8nuk')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('INVALID_OOB_CODE')
    }
  })

  test('FAIL: Verify Password Reset - New password, UID, or OOB Code not provided', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient(projectWithProvidersSetup) : new DeskreeClient(projectWithProvidersSetup, undefined, new AuthMockHandler(response.verifyEmailInvalidParams()))
    try {
      await client.auth.verifyPasswordReset('', '0193j401nd18en18dj1nm29dn8nuk')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('No newPassword, uid, or oobCode provided')
    }
  })

})