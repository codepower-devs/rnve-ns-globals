import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { GlobalsEstado } from '../constant';
import { NivelInformacion } from '../entity';

@Injectable()
export class NivelInformacionRepository {
  constructor(private dataSource: DataSource) {}

  async listarNivelInformacion() {
    return await this.dataSource
      .getRepository(NivelInformacion)
      .createQueryBuilder('nivel_gestioninformacion')
      .select([
        'nivel_gestioninformacion.id',
        'nivel_gestioninformacion.descripcion',
        'nivel_gestioninformacion.precedente',
      ])
      .where('nivel_gestioninformacion.estado = :estado', {
        estado: GlobalsEstado.ACTIVO,
      })
      .getMany();
  }
}
