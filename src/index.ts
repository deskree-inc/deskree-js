import { DeskreeClient } from "./DeskreeClient"

export const createClient = (projectId: string) => {
  return new DeskreeClient(projectId)
}

const deskreeClient = createClient('feedback-tool')
const feedbacks = deskreeClient.from('feedbacks').select()

feedbacks.then(({ data }) => console.log(data)).catch(e => console.log(e))