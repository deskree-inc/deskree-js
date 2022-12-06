import { DeskreeClient } from "./DeskreeClient"

export const createClient = (projectId: string) => {
  return new DeskreeClient(projectId)
}

const client = createClient('deskree-sdk')
const users = client.rest.from('products').select()

users
  .then(({ data }) => console.log('SUCCESS: ', data))
  .catch(e => console.log('FAILED: ', e.response.data))