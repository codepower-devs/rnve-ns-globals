import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Provincias } from '../entity';

@Injectable()
export class ProvinciasRepository {
  constructor(private dataSource: DataSource) {}

  async listarProvinciasPorDepto(deptoId: number) {
    return await this.dataSource
      .getRepository(Provincias)
      .createQueryBuilder('provincias')
      .select([
        'provincias.id',
        'provincias.provincia',
        'provincias.departamentoId',
      ])
      .andWhere('provincias.departamentoId = :deptoId', {
        deptoId,
      })
      .getMany();
  }
}
