import { ClientOptions } from './interfaces/client-options'
import { DeskreeClient } from './deskree-client'

function createClient(options: ClientOptions): DeskreeClient {
  return new DeskreeClient(options)
}

export default createClient;