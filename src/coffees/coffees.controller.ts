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
  create(@Body() body) {
    this.coffeesService.create(body);
    return {
      message: 'This action adds a new coffee',
      body,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    this.coffeesService.update(id, body);
    return {
      message: `This action updates #${id} coffee`,
      body,
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
