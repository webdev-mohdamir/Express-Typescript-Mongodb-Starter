export abstract class AppError extends Error {
    abstract readonly statusCode: number;
    readonly code: string;
    readonly isOperational:boolean;

    constructor(message:string, code:string, isOperational=true){
        super(message);
        this.code = code;
        this.isOperational = isOperational;

        Object.setPrototypeOf(this, new.target.prototype);

        // Captures clean stack trace, omitting the constructor itself from the output
        if(Error.captureStackTrace){
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export class BadRequestError extends AppError {
    readonly statusCode = 400;
    readonly details?: any;

    constructor(message:string, code='BAD_REQUEST', details?:any){
        super(message, code);
        this.details = details;
    }
}

export class NotFoundError extends AppError {
    readonly statusCode = 404;

    constructor(message='Resource not found', code='NOT_FOUND'){
        super(message, code);
    }
}

export class ConflictError extends AppError {
    readonly statusCode = 409;

    constructor(message:string, code='CONFLICT'){
        super(message, code);
    }
}

export class InternalServerError extends AppError {
    readonly statusCode = 500;

    constructor(message='Unextected error occured', code='INTERNAL_SERVER_ERROR'){
        super(message, code, false);
    }
}