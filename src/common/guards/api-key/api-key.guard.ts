import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from 'src/common/decorators/public.decorator';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly configService: ConfigService,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get<boolean>(
      IS_PUBLIC_KEY,
      context.getHandler(),
    ); // get the metadata from the handler (method) of the controller

    if (isPublic) {
      return true; // if the handler is public, return true
    }
    const request = context.switchToHttp().getRequest<Request>(); // get the request object from the context
    const authHeader = request.header('Authorization'); // get the authorization header from the request
    return authHeader === this.configService.get('API_KEY'); // return true if the authorization header matches the API_KEY from the environment variables
  }
}
