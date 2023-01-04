import { DeskreeClient } from './deskree-client'

export const createClient = (projectId: string) => {
  return new DeskreeClient(projectId)
}