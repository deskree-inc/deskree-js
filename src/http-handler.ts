import axios, { AxiosInstance } from 'axios'
// import * as https from 'https'

// const httpsAgent = new https.Agent({
//     rejectUnauthorized: false,
// })

export interface HttpHandlerInterface {
    get(path: string, options?: object): any
    post(path: string, options?: object, params?: object): any
    put(path: string, options?: object): any
    patch(path: string, options?: object, params?: object): any
    delete(path: string, options?: object): any
    createInstance(path: string, headers?: any): void
}

export class HttpHandler implements HttpHandlerInterface {
    public url: string
    public client?: AxiosInstance | any
    public axios_manager = axios

    constructor(url: string, axios_handler?: any) {
        this.url = url

        if (axios_handler !== undefined) {
            this.axios_manager = axios_handler
        }
        else {
            this.axios_manager = axios
        }
    }

    get(path: string, options?: object | undefined): any {
        return this.client?.get(path, options)
    }

    post(path: string, options?: object | undefined, params?: object): any {
        return this.client?.post(path, options, params)
    }

    put(path: string, options?: object | undefined): any {
        return this.client?.put(path, options)
    }

    patch(path: string, options?: object | undefined, params?: object): any {
        return this.client?.patch(path, options, params)
    }

    delete(path: string, options?: object | undefined): any {
        return this.client?.delete(path, options)
    }

    createInstance(path: string, headers?: any): void {
        let options: any = {
            baseURL: `${this.url}${path}`,
            headers: {},
            // httpsAgent
        }

        if (headers === undefined) {
            options.headers['Content-Type'] = 'application/json'
        }
        else {
            if (headers['Content-Type'] === undefined) {
                options.headers['Content-Type'] = 'application/json'
            }

            options.headers = Object.assign(options.headers, headers)
        }

        this.client = this.axios_manager.create(options)

        this.client.interceptors.response.use(null, async (error: any) => {
            if (error.response.status === 403) {

                try {
                    const { data } = await axios.post(`${this.url}/auth/accounts/token/refresh`, { refresh_token: options.headers.refreshToken })
                    error.config.headers.Authorization = `Bearer ${data.data.id_token}`
                } catch (e: any) {
                    throw {
                        code: e.code,
                        message: 'Permission denied. Attempted to refresh the access token using the provided refresh token. Either you do not have permission to access the resource or the provided access/refresh token is expired/invalid.',
                        responseStatus: e.response?.status,
                    }
                }

                return new Promise((resolve) => resolve(axios(error.config)))
            }

            return Promise.reject(error)
        })
    }

}