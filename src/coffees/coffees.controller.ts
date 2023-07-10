import { Controller, Get, Param } from '@nestjs/common';

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
}
