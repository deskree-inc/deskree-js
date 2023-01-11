import { DeskreeClient } from './deskree-client'

export const createClient = (projectId: string) => {
  return new DeskreeClient({projectId})
}

export const createWebClient = (projectId: string, axios: any) => {
  return new DeskreeClient({projectId, axios})
}