import { HttpHandlerInterface } from '../../HttpHandler'

export class AuthMockHandler implements HttpHandlerInterface {

    protected model: any

    constructor(model: any) {
        this.model = model
    }

    get(path: string, options?: object | undefined) {
        if (this.model.response !== undefined) throw this.model
        return { data: this.model }
    }

    post(path: string, options?: object | undefined) {
        if (this.model.response !== undefined) throw this.model
        return { data: this.model }
    }

    patch(path: string, options?: object | undefined) {
        if (this.model.response !== undefined) throw this.model
        return { data: this.model }
    }

    delete(path: string, options?: object | undefined) {
        if (this.model.response !== undefined) throw this.model
        return { data: this.model }
    }

    createInstance(path: string, headers?: any): void { }
}