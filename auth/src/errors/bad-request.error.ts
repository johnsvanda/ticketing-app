import { CustomError } from "./custom.error";

export class BadRequestError extends CustomError {
    statusCode: number = 400;
    serializeErrors() {
        return [{
            message: this.message,
        }]
    }
    constructor(public message: string) {
        super(message);
        this.message = message;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}