import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MembersModule } from './members/members.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { StoresModule } from './stores/stores.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [PrismaModule, MembersModule, UsersModule, AuthModule, StoresModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
