import { DeskreeClient } from './deskree-client'

export const createClient = (projectId: string, axios?: any) => {
  return new DeskreeClient({projectId, axios})
}