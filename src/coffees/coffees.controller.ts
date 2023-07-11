import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
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
