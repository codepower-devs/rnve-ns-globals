import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { DataSource } from 'typeorm';
import { ActualizarGlobalsDto, CrearGlobalsDto } from '../dto';
import { Tablas } from '../entity';

@Injectable()
export class TablasRepository {
  constructor(private dataSource: DataSource) {}

  async buscarPorId(id: string) {
    return await this.dataSource
      .getRepository(Tablas)
      .createQueryBuilder('globals')
      .where({
        id: id,
      })
      .getOne();
  }

  async actualizar(id: string, parametroDto: ActualizarGlobalsDto) {
    try {
      return await this.dataSource
        .getRepository(Tablas)
        .update(id, parametroDto);
    } catch (error) {
      console.log(error);
      throw new RpcException({
        message: error.message,
        status: error.status,
      });
    }
  }

  async listar() {
    return await this.dataSource
      .getRepository(Tablas)
      .createQueryBuilder('tablas')
      .select([
        'tablas.id',
        'tablas.grupo',
        'tablas.descripcion',
        'tablas.tablaId',
      ])
      .getMany();
  }

  async crear(parametroDto: CrearGlobalsDto) {
    try {
      const { grupo, descripcion, tablaId } = parametroDto;

      const parametro = new Tablas();

      parametro.tablaId = tablaId;
      parametro.grupo = grupo;
      parametro.descripcion = descripcion;

      return await this.dataSource.getRepository(Tablas).save(parametro);
    } catch (error) {
      console.log(error);
      throw new RpcException({
        message: error.message,
        status: error.status,
      });
    }
  }
}
