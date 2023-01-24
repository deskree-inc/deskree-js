import { HttpHandler, HttpHandlerInterface } from '../http-handler'
import { AuthClientDataType } from './types'
import { RestClient } from '../rest/rest-client'
import { RequestOptions } from '../request-options'

export class AuthClient implements AuthClientDataType {

  protected client: HttpHandlerInterface
  protected rest?: RestClient

  constructor(opts: RequestOptions) {
    this.client = opts.http === undefined ? new HttpHandler(opts.url, opts.axios) : opts.http
    this.client.createInstance('/auth/accounts')
    this.rest = opts.rest
  }

  /**
   * Sign up with email and password
   * @param email
   * @param password
   * @returns 
   */
  async signUpEmail(email: string, password: string) {
    try {
      const { data } = await this.client.post('/signup', { email, password })
      if (this.rest) this.rest.auth(data.data.idToken)
      return data
    } catch (e) {
      return e
    }
  }

  /**
   * Sign in with email and password
   * @param email 
   * @param password 
   * @returns 
   */
  async signInEmail(email: string, password: string) {
    try {
      const { data } = await this.client.post('/sign-in/email', { email, password })
      if (this.rest) this.rest.auth(data.data.idToken)
      return data
    } catch (e) {
      return e
    }
  }

  /**
   * Create URL for OAuth sign in
   * @param providerId 
   * @param callBackUri 
   * @returns 
   */
  createUrlForOAuthSignIn(providerId: string, callBackUri: string) {
    return this.client.post('/sign-in/auth-url', { providerId, callBackUri })
  }

  /**
   * Sign in with OAuth
   * @param sessionId 
   * @param providerId 
   * @param callBackUri 
   * @param token 
   * @param code 
   * @returns 
   */
  signInOAuth(sessionId: string, providerId: string, callBackUri: string, token: string, code: string) {
    return this.client.post('/sign-in/idp', { sessionId, providerId, callBackUri, token, code })
  }

  /**
   * Invite user
   * @param email 
   * @returns 
   */
  inviteUser(email: string) {
    return this.client.post('/invite', { email })
  }

  /**
   * Reset password
   * @param email 
   * @returns 
   */
  resetPassword(email: string) {
    return this.client.post('/password-reset', { email })
  }

  /**
   * Verify email
   * @param oobCode 
   * @param uid 
   * @returns 
   */
  verifyEmail(oobCode: string, uid: string) {
    return this.client.post('/verify/email', { oobCode, uid })
  }

  /**
   * Verify password reset
   * @param oobCode 
   * @param newPassword 
   * @returns 
   */
  verifyPasswordReset(oobCode: string, newPassword: string) {
    try {
      const { data } = this.client.post('/verify/password-reset', { oobCode, newPassword })
      return data
    } catch (e) {
      return e
    }
  }

  /**
   * Verify invite
   * @param oobCode 
   * @param newPassword 
   * @param uid 
   * @returns 
   */
  verifyInvite(oobCode: string, newPassword: string, uid: string) {
    return this.client.post('/verify/invite', { oobCode, newPassword, uid })
  }

  /**
   * Update email
   * @param email 
   * @returns 
   */
  updateEmail(email: string) {
    return this.client.post('/update-email', { email })
  }

  /**
   * Fetch email providers
   * @param email 
   * @returns 
   */
  fetchEmailProviders(email: string) {
    return this.client.post('/email-providers', { email })
  }

  /**
   * Exchange refresh token for id token
   * @param refresh_token 
   * @returns 
   */
  refreshToken(refresh_token: string) {
    return this.client.post('/token/refresh', { refresh_token })
  }

  /**
   * Delete account
   * @returns 
   */
  deleteAccount() {
    return this.client.delete('')
  }

  /**
   * Get roles
   * @returns 
   */
  getRoles() {
    return this.client.get('/roles')
  }

}