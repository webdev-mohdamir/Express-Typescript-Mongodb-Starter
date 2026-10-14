import type {NextFunction, Request, Response} from "express";
import { AppError } from "../utils/errors.js";

export interface ApiErrorResponse {
    success: boolean;
    error: {
        code: string,
        message: string,
        details?: any
    };
}

export const globalErrorHandler = (err: any, req: Request, res: Response<ApiErrorResponse>, next: NextFunction) => {
    let statusCode = 500;
    let message = 'An unexpected server error occurred.';
    let code = 'INTERNAL_SERVER_ERROR';
    let details:unknown;
    
    if(err instanceof AppError){
        code = err.code;
        statusCode = err.statusCode;
        message = err.message
        details = 'details' in err ? (err as any).details : {}
    }
    else {
        console.error('Unhandled Error:', err);
    }
    
    res.status(statusCode).json({
        success: false,
        error: {
            message,
            code,
            details
        }
    });
}