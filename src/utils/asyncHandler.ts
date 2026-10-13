import type {Request, Response, NextFunction, RequestHandler } from "express"

// Promise resolves errors in async environment (For Express v4 compatibility)
export const asyncHandler = async (fn: RequestHandler): Promise<RequestHandler> =>  {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}