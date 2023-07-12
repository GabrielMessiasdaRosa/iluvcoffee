import { IsString } from 'class-validator'; // check docs for more decorators

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;
  
  @IsString()
  readonly brand: string;
  
  @IsString({ each: true })
  readonly flavors: string[];
}
