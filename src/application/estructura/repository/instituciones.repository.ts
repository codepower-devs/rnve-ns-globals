import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Instituciones } from '../entity';
import { GlobalsEstado } from '../constant';

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
      .where('instituciones.estado = :estado', {
        estado: GlobalsEstado.ACTIVO,
      })
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
      .where('instituciones.estado = :estado', {
        estado: GlobalsEstado.ACTIVO,
      })
      .getMany();
  }
}
