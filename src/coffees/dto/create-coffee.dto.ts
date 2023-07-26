import { IsString } from 'class-validator'; // check docs for more decorators

// this is a dto that will be used in the controller to validate the body of the request 
// dtos are used to validate the data that is passed in the request body, query parameters and headers 

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];

  @IsString()
  readonly description: string;
}
