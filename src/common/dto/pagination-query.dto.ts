import { IsOptional, IsPositive } from 'class-validator';

// this is a pagination dto that will be used in the controller
// to validate the query parameters that are passed in the request
// this dto is optional because the query parameters are optional
// and the class-validator will not validate the query parameters
// if they are not passed in the request

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
