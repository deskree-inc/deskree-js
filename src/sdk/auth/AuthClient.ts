import { HttpHandler, HttpHandlerInterface } from '../../HttpHandler'
import { AuthClientDataType } from '../../types/auth'
import { RestClient } from '../rest/RestClient'

export class AuthClient implements AuthClientDataType {

  protected client: HttpHandlerInterface
  protected rest: any

  constructor(url: string, rest?: RestClient, http?: HttpHandlerInterface) {
    this.client = http === undefined ? new HttpHandler(url) : http
    this.client.createInstance('/auth/accounts')
    this.rest = rest
  }

  /**
   * Sign up with email and password
   * @param email
   * @param password
   * @returns 
   */
  async signUpWithEmailAndPassword(email: string, password: string) {
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
  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      const { data } = await this.client.post('/sign-in/email', { email, password })
      if (this.rest) this.rest.auth(data.data.idToken)
      return data
    } catch (e) {
      return e
    }
  }

}