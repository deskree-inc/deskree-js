import { HttpHandlerInterface } from '../../http-handler'

export class ConfigMockHandler implements HttpHandlerInterface {

    protected model: any

    constructor(model: any) {
        this.model = model
    }
    put(path: string, options?: object | undefined) {
        if (this.model.response !== undefined) throw this.model
        return { data: this.model }
    }

    get(path: string, options?: object | undefined) {
        if (this.model.response !== undefined) throw this.model
        return { data: this.model }
    }

    getByUID(path: string, options?: object | undefined) {
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