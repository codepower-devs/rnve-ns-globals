import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { GlobalsEstado } from '../constant';
import { Municipios } from '../entity';

@Injectable()
export class MunicipiosRepository {
  constructor(private dataSource: DataSource) {}

  async listarMunicipiosPorProvincia(provinciaId: number) {
    return await this.dataSource
      .getRepository(Municipios)
      .createQueryBuilder('municipios')
      .select([
        'municipios.id',
        'municipios.municipio',
        'municipios.provinciaId',
      ])
      .where('municipios.estado = :estado', {
        estado: GlobalsEstado.ACTIVO,
      })
      .andWhere('municipios.provinciaId = :provinciaId', {
        provinciaId,
      })
      .getMany();
  }
}
