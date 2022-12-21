import { DeskreeClient } from './DeskreeClient'

export const createClient = (projectId: string) => {
  return new DeskreeClient(projectId)
}