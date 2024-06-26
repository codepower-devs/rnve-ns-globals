import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { EstablecimientosGestion } from '../entity';

@Injectable()
export class EstablecimientosGestionRepository {
  constructor(private dataSource: DataSource) {}
  async listarEstablecimineotsPorParams(
    institucionId: number,
    municipioId: number,
    redId: number,
  ) {
    return await this.dataSource
      .getRepository(EstablecimientosGestion)
      .createQueryBuilder('establecimientos_gestion')
      .select([
        'establecimientos_gestion.id',
        'establecimientos_gestion.establecimientoId',
        'establecimientos_gestion.establecimiento',
        'establecimientos_gestion.subsector',
        'establecimientos_gestion.institucionId',
        'establecimientos_gestion.institucion',
        'establecimientos_gestion.tipo',
        'establecimientos_gestion.nivel',
        'establecimientos_gestion.ambito',
        'establecimientos_gestion.departamentoId',
        'establecimientos_gestion.departamento',
        'establecimientos_gestion.redId',
        'establecimientos_gestion.red',
        'establecimientos_gestion.municipioId',
        'establecimientos_gestion.municipio',
        'establecimientos_gestion.localidad',
        'establecimientos_gestion.gestionId',
        'establecimientos_gestion.bajalogica',
        'establecimientos_gestion.estadoId',
      ])
      .andWhere('establecimientos_gestion.institucionId = :institucionId', {
        institucionId,
      })
      .andWhere('establecimientos_gestion.municipioId = :municipioId', {
        municipioId,
      })
      .andWhere('establecimientos_gestion.redId = :redId', {
        redId,
      })
      .getMany();
  }
}
