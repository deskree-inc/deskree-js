import { ClientOptions } from "./client-options";
import { HttpHandlerInterface } from "./http-handler";
import { RestClient } from "./rest/rest-client";

export interface RequestOptions {
    options: ClientOptions;
    url: string;
    rest?: RestClient;
    http?: HttpHandlerInterface;
    axios?: any;
    database?: string;
    headers?: any;
    integration?: string;
}