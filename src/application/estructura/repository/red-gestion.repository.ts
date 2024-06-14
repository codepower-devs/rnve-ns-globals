import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Red } from '../entity';

@Injectable()
export class RedGestionRepository {
  constructor(private dataSource: DataSource) {}

  async listarRedesPorDepto(deptoId: number) {
    return await this.dataSource
      .getRepository(Red)
      .createQueryBuilder('red')
      .select(['red.id', 'red.red', 'red.departamentoId'])
      .andWhere('red.departamentoId = :deptoId', {
        deptoId,
      })
      .getMany();
  }
}
