import { SetMetadata } from '@nestjs/common';

// to create a custom decorator, we need to use the SetMetadata() function from the @nestjs/common package
// the SetMetadata() function takes two arguments:
// 1. the key of the metadata we want to set (in this case, isPublic)
// 2. the value of the metadata we want to set (in this case, true)
// we can now use the Public() decorator in our controllers

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
