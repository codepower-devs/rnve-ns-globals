import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Instituciones } from '../entity';

@Injectable()
export class InstitucionesRepository {
  constructor(private dataSource: DataSource) {}

  async listarInstitucinPorSubsector(subsectorId: number) {
    return await this.dataSource
      .getRepository(Instituciones)
      .createQueryBuilder('instituciones')
      .select([
        'instituciones.id',
        'instituciones.subsectorId',
        'instituciones.codinstitucion',
        'instituciones.institucion',
      ])
      .andWhere('instituciones.subsectorId = :subsectorId', {
        subsectorId,
      })
      .getMany();
  }

  async listarInstitucion() {
    return await this.dataSource
      .getRepository(Instituciones)
      .createQueryBuilder('instituciones')
      .select([
        'instituciones.id',
        'instituciones.subsectorId',
        'instituciones.codinstitucion',
        'instituciones.institucion',
      ])
      .getMany();
  }
}
