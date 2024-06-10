import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { GlobalsEstado } from '../constant';
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
      .where('provincias.estado = :estado', {
        estado: GlobalsEstado.ACTIVO,
      })
      .andWhere('provincias.departamentoId = :deptoId', {
        deptoId,
      })
      .getMany();
  }
}
