import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';
// command to generate a DTO: nest g class <name of DTO>
// the @PartialType() decorator is a function that accepts a single argument which is a class
// the @PartialType() decorator is used to create a new DTO class that is a partial of the provided class
// A DTO class is a class that is used to define the shape of data and can be used to validate the data
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
