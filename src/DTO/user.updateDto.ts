    import {
        PartialType
    } from '@nestjs/mapped-types';
    import {
        CreateUserDto
    } from './user.createDto';

    export class UpdateUserDto extends PartialType(CreateUserDto) {}