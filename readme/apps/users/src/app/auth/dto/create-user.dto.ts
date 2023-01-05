import { ApiProperty } from "@nestjs/swagger/dist";

export class CreateUserDto {
  @ApiProperty(
    {
      description: 'The uniq email of user',
      required: true,
      example: 'keks@htmlacademy.ru'
    }
  )
  public email: string;

  @ApiProperty()
  public firstname: string;

  @ApiProperty()
  public lastname: string;

  @ApiProperty()
  public password: string;

  @ApiProperty()
  public avatar: string;

  @ApiProperty()
  public registerDate: string;
}
