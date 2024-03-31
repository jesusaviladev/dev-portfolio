export class HttpError extends Error {
    constructor() {
        super(...arguments)
        this.name = 'HttpError'
    }
}
