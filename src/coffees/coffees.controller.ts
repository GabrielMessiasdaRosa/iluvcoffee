import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
// comand to generate a controller: nest g co <name of controller>
@Controller('coffees')
export class CoffeesController {
  // the constructor is a special method that is executed when an instance of the class is created
  // readonly is used to make the property read-only
  // the readonly keyword is used to prevent the property from being reassigned
  constructor(private readonly coffeesService: CoffeesService) {}

  // this @Get() decorator will be used to handle GET requests to the /coffees endpoint
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll(paginationQuery);
  }
  // this @Get() decorator will be used to handle GET requests to the /coffees/:id endpoint
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(typeof id);
    return this.coffeesService.findOne('' + id);
  }
  // this @Post() decorator will be used to handle POST requests to the /coffees endpoint
  @Post()
  // the @HttpCode() decorator is used to set the HTTP status code of the response
  // @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }
  // this @Patch() decorator will be used to handle PATCH requests to the /coffees/:id endpoint
  @Patch(':id')
  // the @Param() decorator is used to access the route parameters
  // the @Body() decorator is used to access the request body
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }
  // this @Delete() decorator will be used to handle DELETE requests to the /coffees/:id endpoint
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
