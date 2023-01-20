import { IsEmail, IsNotEmpty } from 'class-validator';
import { EnvValidationEmailMessage } from '../email-subscriber.constant';


export class CreateSubscriberDto {

  @IsEmail({}, { message: EnvValidationEmailMessage.EMAIL_NOT_VALID })
  email: string;

  @IsNotEmpty({ message: EnvValidationEmailMessage.FIRST_NAME_IS_EMPTY })
  firstname: string;

  @IsNotEmpty({ message: EnvValidationEmailMessage.LAST_NAME_IS_EMPTY })
  lastname: string;

  @IsNotEmpty({ message: EnvValidationEmailMessage.USER_ID_IS_EMPTY })
  userId: string;
}
