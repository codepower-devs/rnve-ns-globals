import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TablasController } from './controller';
import { TablasService } from './service';
import { TablasRepository } from './repository';
import { Tablas } from './entity';

@Module({
  controllers: [TablasController],
  providers: [TablasService, TablasRepository],
  imports: [TypeOrmModule.forFeature([Tablas])],
})
export class TablasModule {}
