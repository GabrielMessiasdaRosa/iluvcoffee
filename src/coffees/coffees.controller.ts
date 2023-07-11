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

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id') // dynamic route
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return {
      message: 'This action adds a new coffee',
      body,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return {
      message: `This action updates #${id} coffee`,
      body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      message: `This action removes #${id} coffee`,
    };
  }
}
