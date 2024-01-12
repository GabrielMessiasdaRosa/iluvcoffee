import { registerAs } from '@nestjs/config';

// this is a configuration file, is used to organize the configuration of the application (environment variables, database configuration, etc.) and is used to load the configuration of the application in the application
export default registerAs('coffees', () => ({
  foo: 'bar',
}));
