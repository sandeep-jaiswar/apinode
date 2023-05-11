import { Request, Response, NextFunction } from 'express';

function responseInterceptorMiddleware(req: Request, res: Response, next: NextFunction): void {
  const originalJson = res.json;

  res.json = function (data?: any): Response<any> {
    const modifiedResponse = {
      status: res.statusCode,
      data: data,
    };

    // Call the original json method to send the modified response
    return originalJson.call(res, modifiedResponse);
  };

  next();
}

export default responseInterceptorMiddleware;
