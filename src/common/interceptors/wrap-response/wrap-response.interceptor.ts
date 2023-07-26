import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

// Interceptors are classes annotated with the @Injectable() decorator that implement the NestInterceptor interface (the NestInterceptor interface has an intercept() method that takes two arguments: the context and the next handler)
// to create an interceptor, we need to create a class that implements the NestInterceptor interface and implements the intercept() method of the interface (the intercept() method is used to intercept the execution flow before the handler is called)
// the intercept() method takes two arguments:
// 1. the context (in this case, ExecutionContext) - the context is an object that contains the arguments that were passed to the controller method and the handler (method) of the controller
// 2. the next handler (in this case, CallHandler) - the next handler is an object that contains the next() method that is used to call the next handler in the chain (in this case, the next handler is the controller method)
// the intercept() method returns an Observable of any type and is used to intercept the execution flow before the handler is called
// the intercept() method is used to modify the response before it is sent to the client (in this case, we are wrapping the response in an object with a data property)

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    return next.handle().pipe(map((data) => ({ data })));
  }
}
