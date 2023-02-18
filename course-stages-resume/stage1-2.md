# Stages 1 and 2 Resume

## Stage 1

### Setting up a Nest.js Project

To set up a Nest.js project, named "iluvcoffee", follow these steps:

1. Make sure Node.js and npm are installed on your computer.
2. Open the terminal or command prompt on your computer and install Nest.js globally by running the command:
   ```
   npm install -g @nestjs/cli
   ```
3. Next, create a new Nest.js project by running the following command:

   ```
   nest new iluvcoffee
   ```

4. When the installation is complete, navigate to the project folder with the following command:

   ```
   cd iluvcoffee
   ```

5. Start the Nest.js development server by running the following command:

   ```
   npm run start:dev
   ```

6. The development server will be available at http://localhost:3000. You can open your browser and access this URL to see the default Nest.js page.

   There you go! Now you have a Nest.js project named "iluvcoffee" set up and running on your computer.

# Overview of Files Created by `nest new iluvcoffee`

When you run the command `nest new iluvcoffee`, it creates a basic structure of directories and files for your Nest.js project. Here is an overview of the files created:

- `node_modules`: a folder that contains all the project dependencies, including Nest.js itself and other third-party packages.
- `src`: a folder that contains all the project source code. This is where you will write your business logic, controllers, providers, and more.
  - `app.controller.ts`: a basic example of a Nest.js controller.
  - `app.module.ts`: the root module of the application. This is where you register all your providers, controllers, and other modules.
  - `app.service.ts`: a basic example of a Nest.js provider.
  - `main.ts`: the entry point of your Nest.js application. This is where you initialize the root module and start the server.
- `test`: a folder that contains test files for your application.
- `package.json`: a file that contains your project information, including your dependencies, scripts, and other configurations.
- `tsconfig.json`: a file that contains the TypeScript configurations for your project.
- `README.md`: a file with basic information about your project.

These files are just an initial structure for your project. As you add more functionalities to your application, you may create more files and folders, such as models, validators, services, and so on. But this is the basic structure that Nest.js creates for you when you run the `nest new` command.

</ul>

### Stage 2

#### > Running NestJS in Development Mode

Open your code editor and navigate to your iluvcoffee project folder.

Create a new file named coffee.controller.ts inside the src/controllers folder.

Import the necessary dependencies:

import { Controller, Get } from '@nestjs/common';
import { Coffee } from '../entities/coffee.entity';
import { CoffeesService } from '../services/coffees.service';
Add a new class to define the CoffeeController:

@Controller('coffees')
export class CoffeeController {}
Inject the CoffeesService dependency using the constructor:

constructor(private readonly coffeesService: CoffeesService) {}
Create a new GET endpoint to retrieve all coffees:

@Get()
findAll(): Coffee[] {
return this.coffeesService.findAll();
}
Save the file and navigate to the terminal.

Run the command 'npm run start:dev' to start the server.

Open your browser and go to http://localhost:3000/coffees to see the list of coffees.

#### > Creating a Basic Controller

1. Create a new controller: In Nest.js, controllers handle incoming requests and return responses. To create a new controller for our 'iluvcoffees' project, run the following command in your terminal:

```
nest generate controller coffees
```

2. This will generate a new controller called 'coffees.controller.ts' in the 'src' folder of your project.

Add a 'findAll' method to the controller: Open the 'coffees.controller.ts' file and add the following code:

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }
}
```

3. Test the 'findAll' method: To test the 'findAll' method, run the following command in your terminal to start the Nest.js server:

```
npm run start:dev
```

Then, open your browser and go to http://localhost:3000/coffees to see the result.

#### > Use Route Parameters

1. Define a new route: In Nest.js, you can define a route with a parameter by using a colon followed by the parameter name in the route path. For example, to define a route that accepts an id parameter, you would use the following syntax:

```typescript
@Get(':id')
```

This tells Nest.js that this route expects an id parameter in the URL.

2. Add the findOne method: In your CoffeesController class, add the following findOne method that accepts an id parameter and returns a string containing the id:

```typescript
@Get(':id')
findOne(@Param('id') id: string) {
  return `This action returns #${id} coffee`;
}
```

This method uses the @Get(':id') decorator to define a route that expects an id parameter in the URL. The @Param('id') decorator is used to extract the id parameter from the URL and pass it as an argument to the findOne method.

3. Test the route: To test the new findOne method, start your Nest.js server by running the npm run start command in your terminal. Then open your web browser and navigate to http://localhost:3000/coffees/1 (replace 1 with any number you like). You should see the message "This action returns coffee #1" displayed on the page.

You have successfully used route parameters in your CoffeesController and added a new findOne method that returns a string containing the id. You can use this same pattern to define routes with other parameters, and extract those parameters in your controller methods using the @Param decorator.

#### > Handling Request Body / Payload

1. Define a new POST route: In Nest.js, you can define a new route that accepts POST requests by using the @Post decorator. For example, to define a route that accepts a new coffee object in the request body, you can use the following syntax:

```typescript
@Post()
```

2. Add a create method: In your CoffeesController class, add a new create method that accepts a coffee object in the request body and returns a string containing the coffee object data. Here's an example implementation:

```typescript
@Post()
create(@Body() body: any) {
  return `This action adds a new coffee with the name: ${body.name}`;
}
```

This method uses the @Body() decorator to extract the coffee object from the request body and pass it as an argument to the create method.

3. Test the route: To test the new create method, you can use a tool like curl or an API testing tool like Postman. Send a POST request to http://localhost:3000/coffees with a JSON payload that contains the name field. For example:

```json
{
  "name": "Espresso"
}
```

You should receive a response that contains the message "This action adds a new coffee with the name: Espresso".

You have successfully handled a request body or payload in your CoffeesController and added a new create method that accepts a coffee object in the request body. You can use this same pattern to handle request bodies or payloads in other routes and extract the data using the @Body decorator.

#### > Response Status Codes

1. Use the @HttpCode decorator: The @HttpCode decorator allows you to set the HTTP status code for a controller method. For example, to set the status code to 201 Created, you can use the following syntax:

```typescript
@Post()
@HttpCode(201)
create(@Body() body: any) {
  return `This action adds a new coffee with the name: ${body.name}`;
}
```

2. Use the @Res decorator: The @Res decorator allows you to access the response object for a request. You can use this to set the status code, headers, and other properties of the response. Here's an example:

```typescript
@Get(':id')
findOne(@Param('id') id: string, @Res() res: Response) {
  const coffee = this.coffeesService.findOne(id);
  if (!coffee) {
    res.status(404).send({ error: 'Coffee not found' });
    return;
  }
  res.send(coffee);
}
```

In this example, we're using the @Res decorator to access the response object and set the status code to 404 Not Found if the requested coffee doesn't exist.
You can use these decorators to handle response status codes and other properties in your Nest.js controller methods.

#### > Handling Update and Delete Requests

1. Define new PUT and DELETE routes: In Nest.js, you can define new routes that accept PUT and DELETE requests by using the @Put and @Delete decorators, respectively. For example, to define a route that accepts a PUT request to update an existing coffee, you can use the following syntax:

```typescript
@Put(':id')
```

Similarly, to define a route that accepts a DELETE request to delete an existing coffee, you can use the following syntax:

```typescript
@Delete(':id')
```

2. Add update and delete methods: In your CoffeesController class, add new update and remove methods to handle update and delete requests, respectively. Here are some example implementations:

```typescript
@Put(':id')
update(@Param('id') id: string, @Body() body: any) {
  return `This action updates a #${id} coffee with the following data: ${JSON.stringify(body)}`;
}

@Delete(':id')
remove(@Param('id') id: string) {
  return `This action removes a #${id} coffee`;
}
```

The update method accepts an id parameter and a body parameter that contains the updated coffee data. The remove method accepts only an id parameter.

3. Test the routes: To test the new update and remove methods, you can use a tool like curl or an API testing tool like Postman. To send a PUT request to update an existing coffee, send a JSON payload to http://localhost:3000/coffees/1 (replace 1 with the ID of the coffee you want to update). To send a DELETE request to remove an existing coffee, send a request to http://localhost:3000/coffees/1 (again, replace 1 with the ID of the coffee you want to delete).

You have successfully handled update and delete requests in your CoffeesController and added new update and remove methods to handle those requests. You can use this same pattern to handle update and delete requests for other resources in your application.

#### > Implement Pagination with Query Parameters

1. Modify the findAll method: In your CoffeesController class, modify the findAll method to accept a limit and offset query parameter. Here's an example implementation:

```typescript
@Get()
findAll(@Query() paginationQuery: PaginationQueryDto) {
  const { limit, offset } = paginationQuery;
  return `This action returns all coffees. Limit: ${limit}, Offset: ${offset}`;
}
```

This method uses the @Query() decorator to extract the limit and offset query parameters from the request URL and pass them as an argument to the findAll method.

2. Test the route: To test the new findAll method, start your Nest.js server by running the npm run start command in your terminal. Then open your web browser and navigate to http://localhost:3000/coffees?limit=10&offset=5 (replace 10 and 5 with any numbers you like). You should see the message "This action returns all coffees. Limit: 10, Offset: 5" displayed on the page.

You have successfully implemented pagination in your CoffeesController and added a new findAll method that accepts limit and offset query parameters. You can use this same pattern to implement pagination in other routes and extract the query parameters using the @Query decorator.

#### > Creating a Basic Service

1. Create a new service: In Nest.js, you can create a new service by using the Nest CLI. To create a new service called coffees.service.ts, run the following command in your terminal:

```bash
nest generate service coffees
```

This command creates a new coffees.service.ts file in the src/coffees directory.

2. Create an array of coffee objects: In your CoffeesService class, create a private readonly array of coffee objects called coffees. Here's an example implementation:

```typescript
private readonly coffees: Coffee[] = [
  {
    id: 1,
    name: 'Shipwreck Roast',
    brand: 'Buddy Brew',
    flavors: ['chocolate', 'vanilla'],
  },
];
```

3. Create a findAll method: In your CoffeesService class, create a new findAll method that returns the array of coffee objects. Here's an example implementation:

```typescript
findAll() {
  return this.coffees;
}
```

add other methods to the service to handle other requests.

find one coffee by ID

```typescript
findOne(id: string) {
  return this.coffees.find(item => item.id === +id);
}
```

create a new coffee

```typescript
create(createCoffeeDto: CreateCoffeeDto) {
  this.coffees.push(createCoffeeDto);
}
```

update an existing coffee

```typescript
delete(id: string) {
  const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
  if (coffeeIndex >= 0) {
    this.coffees.splice(coffeeIndex, 1);
  }
}
```

4. Inject the service into the controller: In your CoffeesController class, inject the CoffeesService into the controller by adding it as a constructor parameter. Here's an example implementation:

```typescript
constructor(private readonly coffeesService: CoffeesService) {}
```

5. Use the service in the controller: In your CoffeesController class, use the CoffeesService to return all coffee objects in the findAll method. Here's an example implementation:

```typescript
@Get()
findAll() {
  return this.coffeesService.findAll();
}
```

make sure to use the service in the other controller methods as well.

#### > Send User-Friendly Error Messages

1. Use the @HttpException decorator: The @HttpException decorator allows you to throw an exception with a custom status code and message. For example, to throw an exception with a status code of 404 Not Found and a message of "Coffee not found", you can use the following syntax:

```typescript
throw new HttpException('Coffee not found', HttpStatus.NOT_FOUND);
```

#### > Encompass Business-Domain in Modules

1. Create a new module: In Nest.js, you can create a new module by using the Nest CLI. To create a new module called coffees.module.ts, run the following command in your terminal:

```bash
nest generate module coffees
```

This command creates a new coffees.module.ts file in the src/coffees directory.

2. Import the module: In your CoffeesModule class, import the CoffeesController and CoffeesService classes. Here's an example implementation:

```typescript
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
```

3. Import the module in the AppModule: In your AppModule class, import the CoffeesModule class and add it to the imports array. Here's an example implementation:

```typescript
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [CoffeesModule],
})
export class AppModule {}
```

4. Test the module: To test the new CoffeesModule, start your Nest.js server by running the npm run start command in your terminal. Then open your web browser and navigate to http://localhost:3000/coffees. You should see the message "This action returns all coffees" displayed on the page.

You have successfully created a new CoffeesModule and imported it into your AppModule. You can use this same pattern to create new modules and import them into your AppModule.

#### > Introduction to Data Transfer Objects

1. Create a new DTO: In Nest.js, you can create a new DTO by using the Nest CLI. To create a new DTO called create-coffee.dto.ts, run the following command in your terminal:

```bash
nest generate class create-coffee.dto
```

This command creates a new create-coffee.dto.ts file in the src/coffees/dto directory.

2. Add properties to the DTO: In your CreateCoffeeDto class, add a name property and a brand property. Here's an example implementation:

```typescript
export class CreateCoffeeDto {
  readonly name: string;
  readonly brand: string;
}
```

3. Use the DTO: In your CoffeesController class, use the CreateCoffeeDto class to type the body parameter of the create method. Here's an example implementation:

```typescript
@Post()
create(@Body() createCoffeeDto: CreateCoffeeDto) {
  return this.coffeesService.create(createCoffeeDto);
}
```

4. Test the DTO: To test the new CreateCoffeeDto, start your Nest.js server by running the npm run start command in your terminal. Then open your web browser and navigate to http://localhost:3000/coffees. You should see the message "This action returns all coffees" displayed on the page.

You have successfully created a new CreateCoffeeDto and used it to type the body parameter of the create method in your CoffeesController. You can use this same pattern to create new DTOs and use them to type the body parameters of your controller methods.

#### > Validate Input Data with Data Transfer Objects

1. Add validation decorators: In your CreateCoffeeDto class, add the @IsString() and @IsNotEmpty() decorators to the name property and the @IsString() and @IsNotEmpty() decorators to the brand property. Here's an example implementation:

```typescript
export class CreateCoffeeDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly brand: string;
}
```

2. Test the validation: To test the validation, start your Nest.js server by running the npm run start command in your terminal. Then open your web browser and navigate to http://localhost:3000/coffees. You should see the message "This action returns all coffees" displayed on the page.

#### > Handling Malicious Request Data

1. Add the @Transform decorator: In your CreateCoffeeDto class, add the @Transform() decorator to the name property and the @Transform() decorator to the brand property. Here's an example implementation:

```typescript
export class CreateCoffeeDto {
  @Transform()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Transform()
  @IsString()
  @IsNotEmpty()
  readonly brand: string;
}
```

2. Test the validation: To test the validation, start your Nest.js server by running the npm run start command in your terminal. Then open your web browser and navigate to http://localhost:3000/coffees. You should see the message "This action returns all coffees" displayed on the page.

You have successfully added the @Transform() decorator to the name property and the brand property in your CreateCoffeeDto class. You can use this same pattern to add the @Transform() decorator to other properties in your DTOs.

#### > Auto-transform Payloads to DTO instances

1. Add the @AutoMap decorator: In your CreateCoffeeDto class, add the @AutoMap() decorator to the name property and the @AutoMap() decorator to the brand property. Here's an example implementation:

```typescript
export class CreateCoffeeDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  readonly brand: string;
}
```

2. Test the validation: To test the validation, start your Nest.js server by running the npm run start command in your terminal. Then open your web browser and navigate to http://localhost:3000/coffees. You should see the message "This action returns all coffees" displayed on the page.

You have successfully added the @AutoMap() decorator to the name property and the brand property in your CreateCoffeeDto class. You can use this same pattern to add the @AutoMap() decorator to other properties in your DTOs.
