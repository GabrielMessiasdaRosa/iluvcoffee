import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
// a filter is a class annotated with the @Catch() decorator that implements the ExceptionFilter interface
// the @Catch() decorator takes the exception type as an argument (in this case, HttpException) and returns a class that implements the ExceptionFilter interface
// the ExceptionFilter interface has a catch() method that takes two arguments:
// 1. the exception itself (in this case, HttpException) - the exception is an object that contains the status code and the response
// 2. the host (in this case, ArgumentsHost) - the host is an object that contains the arguments that were passed to the controller method
// the catch() method returns nothing (void) and is used to handle the exception and send a response to the client

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus(); // get the status code from the exception
    const exceptionResponse = exception.getResponse(); // get the response from the exception
    const error =
      typeof response === 'string'
        ? { message: exceptionResponse }
        : (exceptionResponse as Object); // if the response is a string, return the response as it is, else return the response as a Record<string, unknown>
    response.status(status).json({
      ...error,
      timestamp: new Date().toISOString(),
    });
  }
}
