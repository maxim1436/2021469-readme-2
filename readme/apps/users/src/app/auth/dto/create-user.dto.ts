import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsISO8601, IsString } from 'class-validator';
import {AUTH_USER_DATE_BIRTH_NOT_VALID, AUTH_USER_EMAIL_NOT_VALID} from '../auth.constant';

export class CreateUserDto {
  @ApiProperty(
    {
      description: 'The uniq email of user',
      required: true,
      example: 'keks@htmlacademy.ru',
    }
  )

  @IsEmail(
    {},
    {message: AUTH_USER_EMAIL_NOT_VALID},
  )
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Keks',
  })
  @IsString()
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  @IsString()
  public lastname: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  @IsString()
  public password: string;

  @ApiProperty({
    description:'User avatar',
  })
  @IsString()
  public avatar: string;

  @ApiProperty({
    description: 'User register date',
    example: '1981-03-12',

  })
  @IsISO8601({
    message: AUTH_USER_DATE_BIRTH_NOT_VALID,
  })
  public registerDate: string;
}
