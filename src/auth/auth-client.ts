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
      throw e
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
      throw e
    }
  }

  /**
   * Create URL for OAuth sign in
   * @param providerId 
   * @param callBackUri 
   * @returns 
   */
  createUrlForOAuthSignIn(providerId: string, callBackUri: string) {
    try {
      return this.client.post('/sign-in/auth-url', { providerId, callBackUri })
    } catch (e) {
      throw e
    }
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
    try {
      return this.client.post('/sign-in/idp', { sessionId, providerId, callBackUri, token, code })
    } catch (e) {
      throw e
    }
  }

  /**
   * Invite user
   * @param email 
   * @returns 
   */
  inviteUser(email: string) {
    try {
      return this.client.post('/invite', { email })
    } catch (e) {
      throw e
    }
  }

  /**
   * Reset password
   * @param email 
   * @returns 
   */
  resetPassword(email: string) {
    try {
      return this.client.post('/password-reset', { email })
    } catch (e) {
      throw e
    }
  }

  /**
   * Update password
   * @param oldPassword old password
   * @param newPassword new password
   * @returns 
   */
  updatePassword(oldPassword: string, newPassword: string) {
    try {
      return this.client.post('/update-password', { oldPassword, newPassword })
    } catch (e) {
      throw e
    }
  }

  /**
   * Verify email
   * @param oobCode 
   * @param uid 
   * @returns 
   */
  async verifyEmail(oobCode: string, uid: string) {
    try {
      return await this.client.post('/verify/email', { oobCode, uid })
    } catch (e: any) {
      throw e
    }
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
      throw e
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
    try {
      const { data } = this.client.post('/verify/invite', { oobCode, newPassword, uid })
      return data
    } catch (e) {
      throw e
    }
  }

  /**
   * Update email
   * @param email 
   * @returns 
   */
  updateEmail(email: string) {
    try {
      return this.client.post('/update-email', { email })
    } catch (e) {
      throw e
    }
  }

  /**
   * Fetch email providers
   * @param email 
   * @returns 
   */
  fetchEmailProviders(email: string) {
    try {
      return this.client.post('/email-providers', { email })
    } catch (e) {
      throw e
    }
  }

  /**
   * Exchange refresh token for id token
   * @param refresh_token 
   * @returns 
   */
  refreshToken(refresh_token: string) {
    try {
      return this.client.post('/token/refresh', { refresh_token })
    } catch (e) {
      throw e
    }
  }

  /**
   * Delete account
   * @returns 
   */
  deleteAccount() {
    try {
      return this.client.delete('')
    } catch (e) {
      throw e
    }
  }

  /**
   * Get roles
   * @returns 
   */
  getRoles() {
    try {
      return this.client.get('/roles')
    } catch (e) {
      throw e
    }
  }

}