import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { GlobalsEstado } from '../constant';
import { Red } from '../entity';

@Injectable()
export class RedRepository {
  constructor(private dataSource: DataSource) {}

  async listarRedesPorDepto(deptoId: number) {
    return await this.dataSource
      .getRepository(Red)
      .createQueryBuilder('red')
      .select(['red.id', 'red.red', 'red.departamentoId'])
      .where('red.estado = :estado', {
        estado: GlobalsEstado.ACTIVO,
      })
      .andWhere('red.departamentoId = :deptoId', {
        deptoId,
      })
      .getMany();
  }
}
