import { Injectable, NestMiddleware } from '@nestjs/common';
// middleware is a function that has access to the request and response objects
// for every incoming request, we can create a middleware that will be executed before the controller method is called
// can be used to modify the request object, the response object or to call the next middleware in the chain
// to create a middleware, we need to create a class that implements the NestMiddleware interface and implements the use() method of the interface
// the use() method takes three arguments:
// 1. the request object (in this case, any) - the request object is an object that contains the request data
// 2. the response object (in this case, any) - the response object is an object that contains the response data
// 3. the next function (in this case, () => void) - the next function is a function that is used to call the next middleware in the chain
// the use() method returns nothing (void) and is used to modify the request object, the response object or to call the next middleware in the chain

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request... MIDDLEWARE');

    res.on('finish', () => console.timeEnd('Request-response time'));
    next();
  }
}
