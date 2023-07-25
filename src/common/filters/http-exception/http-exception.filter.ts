import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

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
 