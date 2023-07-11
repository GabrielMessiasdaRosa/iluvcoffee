import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './coffees.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    this.coffees.push({ id: this.coffees.length + 1, ...createCoffeeDto });
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.coffees.find((item) => item.id === +id);
    if (existingCoffee) {
      this.coffees = this.coffees.map((item) =>
        item.id === +id ? { ...item, ...updateCoffeeDto } : item,
      );
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
