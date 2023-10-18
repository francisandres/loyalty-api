import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  userInChargeId: string;
}
