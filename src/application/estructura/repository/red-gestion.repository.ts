import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Red } from '../entity';
import { GlobalsEstado } from '../constant';

@Injectable()
export class RedGestionRepository {
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
