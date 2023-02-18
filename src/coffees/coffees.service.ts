import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Event } from 'src/events/entities/event.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity.ts';

// command to generate a service: nest g s <name of service>

// the @Injectable() decorator is a function that accepts a single argument which is a metadata object
// for service classes, the @Injectable() decorator is required to be able to inject the service into other classes
@Injectable()
export class CoffeesService {
  constructor(
    // the @InjectRepository() decorator is a function that accepts a single argument which is an entity class
    // the @InjectRepository() decorator is used to inject a repository for the provided entity class
    // the readonly keyword is used to make the property read-only
    // read-only properties can only be set in the constructor
    // the coffeeRepository property is used to access the repository for the Coffee entity
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
    @InjectRepository(Flavor)
    private readonly flavorsRepository: Repository<Flavor>,
    // DataSource is a built-in type that is used to define a data source
    // the dataSources property is used to access the data source
    private readonly dataSources: DataSource,
  ) {}
  // Here is the code for the service methods:
  // the async keyword is used to define an asynchronous function
  // its important to know that the async keyword is not required for all methods
  async findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    // the find() method is used to find all records in the database
    return await this.coffeeRepository.find({
      relations: {
        flavors: true,
      },
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    // the findOne() method is used to find a single record in the database by id
    // we can use where clauses to find records by other properties
    const coffee = this.coffeeRepository.findOne({
      where: { id },
      relations: { flavors: true },
    });
    if (!coffee) {
      // the NotFoundException is a built-in exception that is used to throw a 404 error
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    // the preload() method is used to preload a record into the repository
    // the preload() method accepts a single argument which is an object that contains the id of the record to preload and the properties to update
    // for example, if we wanted to preload a record with the id of 1 and the name of "test", we would do the following:
    // this.coffeeRepository.preload({ id: 1, name: "test" })
    // the preload() method is useful when we want to update a record

    const flavors = await Promise.all(
      createCoffeeDto.flavors.map((name) => this.preloadFlavorByName(name)),
    );
    // the create() method is used to create a new record in the database
    // the create() method accepts a single argument which is an object that contains the properties of the new record
    const coffee = this.coffeeRepository.create({
      ...createCoffeeDto,
      flavors,
    });
    // the save() method is used to save the new record to the database
    return this.coffeeRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    // the preload() method is used to preload a record into the repository
    // the preload() method accepts a single argument which is an object that contains the id of the record to preload and the properties to update
    const flavors = await Promise.all(
      updateCoffeeDto.flavors.map((name) => this.preloadFlavorByName(name)),
    );
    const coffee = await this.coffeeRepository.preload({
      id,
      ...updateCoffeeDto,
      flavors,
    });
    if (!coffee) {
      // the NotFoundException is a built-in exception that is used to throw a 404 error
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    // the save() method is used to save the updated record to the database
    return this.coffeeRepository.save(coffee);
  }

  async remove(id: string) {
    // the remove() method is used to remove a record from the database
    const coffee = await this.findOne(id);
    return this.coffeeRepository.remove(coffee);
  }
  // the preloadFlavorByName() method is used to preload a flavor by name
  async preloadFlavorByName(name: string): Promise<Flavor> {
    const existingFlavor = await this.flavorsRepository.findOne({
      where: { name },
    });
    if (existingFlavor) {
      return existingFlavor;
    }
    return this.flavorsRepository.create({ name });
  }

  async recommendCoffee(coffee: Coffee) {
    const queryRunner = this.dataSources.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      coffee.recommendations++;

      const recommendEvent = new Event();
      recommendEvent.name = 'recommend_coffee';
      recommendEvent.type = 'coffee';
      recommendEvent.payload = { coffeeId: coffee.id };

      await queryRunner.manager.save(coffee);
      await queryRunner.manager.save(recommendEvent);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
