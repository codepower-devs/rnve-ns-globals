import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Establecimientos } from '../entity';

@Injectable()
export class EstablecimientosRepository {
  constructor(private dataSource: DataSource) {}

  async listarEstablecimineotsPorParams(
    institucionId: number,
    municipioId: number,
    redId: number,
  ) {
    return await this.dataSource
      .getRepository(Establecimientos)
      .createQueryBuilder('establecimientos')
      .select([
        'establecimientos.id',
        'establecimientos.establecimiento',
        'establecimientos.subsector',
        'establecimientos.institucionId',
        'establecimientos.institucion',
        'establecimientos.tipo',
        'establecimientos.nivel',
        'establecimientos.ambito',
        'establecimientos.departamentoId',
        'establecimientos.departamento',
        'establecimientos.redId',
        'establecimientos.red',
        'establecimientos.municipioId',
        'establecimientos.municipio',
        'establecimientos.localidad',
        'establecimientos.gestionId',
        'establecimientos.bajalogica',
        'establecimientos.estadoId',
      ])
      .andWhere('establecimientos.institucionId = :institucionId', {
        institucionId,
      })
      .andWhere('establecimientos.municipioId = :municipioId', {
        municipioId,
      })
      .andWhere('establecimientos.redId = :redId', {
        redId,
      })
      .getMany();
  }
}
