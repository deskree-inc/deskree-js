import { DeskreeClient } from './DeskreeClient'

export const createClient = (projectId: string) => {
  return new DeskreeClient(projectId)
}

// const client = createClient('deskree-sdk')
// const products = client.rest.from('products').insert({ name: 'some product', price: 9.90 })

// products
//   .then(({ data }: any) => console.log('SUCCESS: ', data))
//   .catch((e: any) => console.log('FAILED: ', e.response.data))

// const products = client.rest.from('products').update('hk1aB9URgpLmhQGbGGES', { price: 10 })

// products
//   .then(({ data }: any) => console.log('SUCCESS: ', data))
//   .catch((e: any) => console.log('FAILED: ', e.response.data))