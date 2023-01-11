import { HttpHandlerInterface } from "../http-handler";
import { RestClient } from "../rest/rest-client";

export interface AuthClientOptions {
    url: string;
    rest?: RestClient;
    http?: HttpHandlerInterface;
    axios?: any;
}