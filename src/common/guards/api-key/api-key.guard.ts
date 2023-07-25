import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>(); // get the request object from the context
    const authHeader = request.header('Authorization'); // get the authorization header from the request
    return authHeader === process.env.API_KEY; // return true if the authorization header matches the API_KEY from the environment variables
  }
}
