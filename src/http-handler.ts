import axios, { AxiosInstance } from 'axios'
// import * as https from 'https'

// const httpsAgent = new https.Agent({
//     rejectUnauthorized: false,
// })

export interface HttpHandlerInterface {
    get(path: string, options?: object): any
    post(path: string, options?: object): any
    patch(path: string, options?: object): any
    delete(path: string, options?: object): any
    createInstance(path: string, headers?: any): void
}

export class HttpHandler implements HttpHandlerInterface {
    public url: string
    public client?: AxiosInstance

    constructor(url: string) {
        this.url = url
    }

    get(path: string, options?: object | undefined): any {
        return this.client?.get(path, options)
    }

    post(path: string, options?: object | undefined): any {
        return this.client?.post(path, options)
    }

    patch(path: string, options?: object | undefined): any {
        return this.client?.patch(path, options)
    }

    delete(path: string, options?: object | undefined): any {
        return this.client?.delete(path, options)
    }

    createInstance(path: string, headers?: any): void {
        let options = {
            baseURL: `${this.url}${path}`,
            headers: { 'Content-Type': 'application/json' },
            //httpsAgent
        }

        if (headers !== undefined) {
            options.headers = Object.assign(options.headers, headers)
        }

        this.client = axios.create(options)
    }

}

