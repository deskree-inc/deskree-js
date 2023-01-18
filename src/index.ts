import { ClientOptions } from './client-options'
import { DeskreeClient } from './deskree-client'

export const createClient = (options: ClientOptions) => {
  return new DeskreeClient(options)
}