import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GlobalsController } from './controller';
import { GlobalsService } from './service';
import { GlobalsRepository } from './repository';
import { Globals } from './entity';

@Module({
  controllers: [GlobalsController],
  providers: [GlobalsService, GlobalsRepository],
  imports: [TypeOrmModule.forFeature([Globals])],
})
export class GlobalsModule {}
