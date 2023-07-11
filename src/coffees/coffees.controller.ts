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
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id') // dynamic route
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    this.coffeesService.create(createCoffeeDto);
    return {
      message: 'Coffee has been created!',
      coffee: { ...createCoffeeDto },
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    this.coffeesService.update(id, updateCoffeeDto);
    return {
      message: `Coffee ${id} has been updated!`,
      updateCoffeeDto,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.coffeesService.remove(id);
    return {
      message: `${id} has been deleted! `,
    };
  }
}
