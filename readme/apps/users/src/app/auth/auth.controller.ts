import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('auth')

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ){}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The new user has been succeful created'})
  async create(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }

}
