import { IsString } from 'class-validator';
// a DTO is a data transfer object that is used to define the shape of the data that is sent to the server
// a DTO is used to validate the data that is sent to the server
export class CreateCoffeeDto {
  // the @IsString() decorator is a function that accepts a single argument which is a metadata object
  // messages are used to provide custom error messages
  // other decorators can be used to validate the data
  @IsString({ message: 'Name is required' })
  readonly name: string;
  @IsString({ message: 'Brand is required' })
  readonly brand: string;
  @IsString({ each: true, message: 'Flavors must be an array of strings' })
  readonly flavors: string[];
}
