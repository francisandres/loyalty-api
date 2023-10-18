import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  logoUrl: string;

  @ApiProperty()
  managerUserId: string;
}
