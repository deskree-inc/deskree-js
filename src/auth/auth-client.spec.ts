import { describe, test, expect } from 'vitest'
import { DeskreeClient } from '../deskree-client'
import { AuthResponse } from './mocks/auth-response'
import { AuthMockHandler } from './mocks/auth-mock-handler'
import crypto from 'crypto'

describe('Testing AUTH Module', () => {
  let response: AuthResponse = new AuthResponse()
  let mock_active = process.env.MOCK_ACTIVE !== undefined && process.env.MOCK_ACTIVE === 'false' ? false : true

  const projectWithProvidersSetup = 'deskreesdk'
  const projectMissingProvidersSetup = 'deskree-sdk'
  const randomEmail = crypto.randomBytes(20).toString('hex') + '@vitest.com'

  test('SUCCESS: Sign Up With Email And Password', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.signUpEmailSetupSuccess(randomEmail)) })
    const { data } = await client.auth().signUpEmail(randomEmail, 'qwerty12345')
    expect(data.email).toEqual(randomEmail)
  })

  test('FAIL: Sign Up With Email And Password - Setup not complete', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectMissingProvidersSetup }) : new DeskreeClient({ projectId: projectMissingProvidersSetup, host: undefined, http: new AuthMockHandler(response.signUpEmailSetupNotComplete()) })
    try {
      await client.auth().signUpEmail(randomEmail, 'qwerty12345')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('Email/password setup is not complete. Please complete the Email/Password Authentication setup in your project')
    }
  })

  test('FAIL: Sign Up With Email And Password - Email already in use', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectMissingProvidersSetup }) : new DeskreeClient({ projectId: projectMissingProvidersSetup, host: undefined, http: new AuthMockHandler(response.signUpEmailEmailAlreadyInUse()) })
    try {
      await client.auth().signUpEmail('email@email.com', 'password')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('The email address is already in use by another account.')
    }
  })

  test('SUCCESS: Sign In With Email And Password', async () => {
    const email = 'email@example.com'
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.signUpEmailSetupSuccess(email)) })
    const { data } = await client.auth().signInEmail(email, 'qwerty12345')
    expect(data.email).toEqual(email)
  })

  test('FAIL: Sign In With Email And Password - Email not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectMissingProvidersSetup }) : new DeskreeClient({ projectId: projectMissingProvidersSetup, host: undefined, http: new AuthMockHandler(response.signInEmailEmailNotFound()) })
    try {
      await client.auth().signInEmail('inexistent_email@email.com', 'password')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('EMAIL_NOT_FOUND')
    }
  })

  test('FAIL: Sign In With Email And Password - Invalid password', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectMissingProvidersSetup }) : new DeskreeClient({ projectId: projectMissingProvidersSetup, host: undefined, http: new AuthMockHandler(response.signInEmailEmailNotFound()) })
    try {
      await client.auth().signInEmail(randomEmail, 'invalid_password')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('INVALID_PASSWORD')
    }
  })

  test('SUCCESS: Create URL for OAuth Sign In With Google', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.createUrlForOAuthSignWithGoogleInSuccess()) })
    const { data } = await client.auth().createUrlForOAuthSignIn('google.com', 'http://localhost')
    expect(data.data.providerId).toEqual('google.com')
  })

  test('SUCCESS: Create URL for OAuth Sign In With Facebook', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.createUrlForOAuthSignWithFacebookInSuccess()) })
    const { data } = await client.auth().createUrlForOAuthSignIn('facebook.com', 'http://localhost')
    expect(data.data.providerId).toEqual('facebook.com')
  })

  test('SUCCESS: Create URL for OAuth Sign In With GitHub', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.createUrlForOAuthSignWithGitHubInSuccess()) })
    const { data } = await client.auth().createUrlForOAuthSignIn('github.com', 'http://localhost')
    expect(data.data.providerId).toEqual('github.com')
  })

  test('FAIL: Create URL for OAuth Sign In - Identity provider configuration not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectMissingProvidersSetup }) : new DeskreeClient({ projectId: projectMissingProvidersSetup, host: undefined, http: new AuthMockHandler(response.createUrlForOAuthSignInIdentityProviderConfigNotFound()) })
    try {
      await client.auth().createUrlForOAuthSignIn('google.com', 'http://localhost')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('OPERATION_NOT_ALLOWED : The identity provider configuration is not found.')
    }
  })

  // TODO: SUCCESS: Sign In With Google Success

  // TODO: SUCCESS: Sign In With Facebook Success

  // TODO: SUCCESS: Sign In With GitHub Success

  test('FAIL: Sign In With a Selected OAuth Provider - Identity provider configuration not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectMissingProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.createUrlForOAuthSignInIdentityProviderConfigNotFound()) })
    try {
      await client.auth().signInOAuth('kasdoa0123-012sdasd', 'google.com', 'http://localhost', 'asdkpasd', '0aksd09d0jd091ij0')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('OPERATION_NOT_ALLOWED : The identity provider configuration is not found.')
    }
  })

  test('FAIL: Sign In With a Selected OAuth Provider - Invalid Google Token', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.singInWithOAuthInvalidGoogleToken()) })
    try {
      await client.auth().signInOAuth('kasdoa0123-012sdasd', 'google.com', 'http://localhost', 'asdkpasd', '0aksd09d0jd091ij0')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('INVALID_IDP_RESPONSE : Unable to parse Google id_token: asdkpasd')
    }
  })

  test('SUCCESS: Invite User', async () => {
    const randomEmail = crypto.randomBytes(20).toString('hex') + '@vitest.com'
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.inviteUserSuccess()) })
    const { data } = await client.auth().inviteUser(randomEmail)
    expect(data).toEqual('')
  })

  test('FAIL: Invite User - No email provided', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.inviteUserNoEmailProvided()) })
    try {
      await client.auth().inviteUser('')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('No email address provided')
    }
  })

  test('SUCCESS: Reset Password', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.resetPasswordSuccess()) })
    const { data } = await client.auth().resetPassword(randomEmail)
    expect(data).toEqual('')
  })

  test('FAIL: Reset Password - Email not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.resetPasswordNoEmailFound()) })
    try {
      await client.auth().resetPassword('asd@asd.com')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('There is no user record corresponding to the provided email.')
    }
  })

  // TODO: SUCCESS: Verify Email

  // test('SUCCESS: Verify Email', async () => {
  //   let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.resetPasswordSuccess()) })
  //   const { data } = await client.auth().verifyEmail('na9uubnkloaf9n18n9u112u41', '5fXWuEcJYidZmcZEXc6XpUYdtFq2')
  //   expect(data).toEqual('')
  // })

  test('FAIL: Verify Email - Email not found', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.verifyEmailNoUserFound()) })
    try {
      await client.auth().verifyEmail('na9uubnkloaf9n18n9u112u41', 'EnoFyhm0tYZVADqgAdOtH41KnJJ3')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('There is no user record corresponding to the provided identifier.')
    }
  })

  test('FAIL: Verify Email - Invalid OOB Code', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.verifyEmailInvalidOobCode()) })
    try {
      await client.auth().verifyEmail('na9uubnkloaf9n18n9u112u41', '5fXWuEcJYidZmcZEXc6XpUYdtFq2')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('INVALID_OOB_CODE')
    }
  })

  // TODO: SUCCESS: Verify Passoword Reset

  test('FAIL: Verify Password Reset - Invalid OOB Code', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.verifyEmailInvalidOobCode()) })
    try {
      await client.auth().verifyPasswordReset('invalid_oob_code', 'CN5GtxT8VVSHKOlw0MWoqbhq06a2')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('INVALID_OOB_CODE')
    }
  })

  test('FAIL: Verify Password Reset - New password, UID, or OOB Code not provided', async () => {
    let client: DeskreeClient = mock_active === false ? new DeskreeClient({ projectId: projectWithProvidersSetup }) : new DeskreeClient({ projectId: projectWithProvidersSetup, host: undefined, http: new AuthMockHandler(response.verifyEmailInvalidParams()) })
    try {
      await client.auth().verifyPasswordReset('', '0193j401nd18en18dj1nm29dn8nuk')
    } catch (e: any) {
      expect(e.response.data.errors.errors[0].detail).toEqual('No newPassword, uid, or oobCode provided')
    }
  })

})