import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { GlobalsEstado } from '../constant';
import { Departamentos } from '../entity';
import { Municipioredgestion } from '../entity/municipio_redgestion.entity';

@Injectable()
export class DepartamentosRepository {
  constructor(private dataSource: DataSource) {}

  async listarDepartamentos() {
    return await this.dataSource
      .getRepository(Departamentos)
      .createQueryBuilder('departamentos')
      .select([
        'departamentos.id',
        'departamentos.departamento',
        'departamentos.sigladepto',
      ])
      .where('departamentos.estado = :estado', {
        estado: GlobalsEstado.ACTIVO,
      })
      .getMany();
  }

  async listarCombosrepo(depentrada: number, redentra: number) {
    return await this.dataSource
      .getRepository(Municipioredgestion)
      .createQueryBuilder('municipio_redgestion')
      .innerJoinAndSelect('municipio_redgestion.muniRedGestionId', 'mrg')
      .innerJoinAndSelect('municipio_redgestion.muniRedGestionGes', 'mri')
      .innerJoinAndSelect('municipio_redgestion.municipios', 'm')
      .select([
        'municipio_redgestion.municipioId',
        'municipio_redgestion.redId',
        'mrg.redId',
        'mrg.red',
        'mrg.departamentoId',
        'm.id',
        'm.provinciaId',
        'm.municipio',
      ])
      .andWhere('mrg.departamentoId = :dep', { dep: depentrada })
      .andWhere('mrg.redId = :red', { red: redentra })
      .getMany();
  }
}
