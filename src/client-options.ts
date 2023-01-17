import { HttpHandlerInterface } from "./http-handler";

export interface ClientOptions {
  projectId: string;
  host?: string;
  http?: HttpHandlerInterface;
  axios?: any | undefined;
  adminToken?: string;
  userToken?: string;
}