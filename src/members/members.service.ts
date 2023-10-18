import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}
  create(createMemberDto: CreateMemberDto) {
    return this.prisma.membro.create({ data: createMemberDto });
  }

  findAll() {
    return this.prisma.membro.findMany({ include: { userInCharge: true } });
  }

  findOne(id: string) {
    return this.prisma.membro.findUnique({
      where: { id },
      include: { userInCharge: true },
    });
  }

  update(id: string, updateMemberDto: UpdateMemberDto) {
    return this.prisma.membro.update({
      where: { id },
      data: updateMemberDto,
    });
  }

  remove(id: string) {
    return this.prisma.membro.delete({ where: { id } });
  }
}
