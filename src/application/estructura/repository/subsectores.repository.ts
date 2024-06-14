import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Subsectores } from '../entity';

@Injectable()
export class SubsectoresRepository {
  constructor(private dataSource: DataSource) {}
  async listarSubsector() {
    return await this.dataSource
      .getRepository(Subsectores)
      .createQueryBuilder('subsectores')
      .select([
        'subsectores.id',
        'subsectores.codsubsector',
        'subsectores.subsector',
        'subsectores.abrevsubsector',
      ])
      .getMany();
  }
}
