import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstructuraController } from './controller';
import {
  DepartamentoService,
  EstablecimientoService,
  InstitucionesService,
  MunicipiosService,
  NivelInformacionService,
  ProvinciasService,
  RedesService,
  SubsectoresService,
} from './service';
import {
  Departamentos,
  Establecimientos,
  EstablecimientosGestion,
  Instituciones,
  Municipios,
  NivelInformacion,
  Provincias,
  Subsectores,
} from './entity';
import { Red } from '../estructura/entity';
import {
  DepartamentosRepository,
  EstablecimientosGestionRepository,
  EstablecimientosRepository,
  InstitucionesRepository,
  MunicipiosRepository,
  NivelInformacionRepository,
  ProvinciasRepository,
  RedRepository,
  SubsectoresRepository,
} from './repository';
import { Redgestion } from './entity/red_gestion.entity';
import { Municipioredgestion } from './entity/municipio_redgestion.entity';

@Module({
  controllers: [EstructuraController],
  providers: [
    DepartamentoService,
    EstablecimientoService,
    InstitucionesService,
    MunicipiosService,
    ProvinciasService,
    RedesService,
    SubsectoresService,
    NivelInformacionService,
    EstablecimientosGestionRepository,
    DepartamentosRepository,
    EstablecimientosRepository,
    InstitucionesRepository,
    MunicipiosRepository,
    ProvinciasRepository,
    RedRepository,
    SubsectoresRepository,
    NivelInformacionRepository,
  ],
  imports: [
    TypeOrmModule.forFeature([
      Departamentos,
      EstablecimientosGestion,
      Establecimientos,
      Instituciones,
      Municipios,
      Provincias,
      Red,
      Subsectores,
      NivelInformacion,
      Redgestion,
      Municipioredgestion,
    ]),
  ],
})
export class EstructuraModule {}
