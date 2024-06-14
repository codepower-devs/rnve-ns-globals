import { Module } from '@nestjs/common';
import { GlobalsModule } from './catalogos-genericos/globals.module';
import { EstructuraModule } from './estructura/estructura.module';
import { ParametroModule } from './parametro/parametro.module';
import { TablasModule } from './tablas-genericos/tablas.module';

@Module({
  imports: [GlobalsModule, EstructuraModule, ParametroModule, TablasModule],
})
export class ApplicationModule {}
