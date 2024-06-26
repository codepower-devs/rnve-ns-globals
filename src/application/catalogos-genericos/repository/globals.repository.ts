import { Brackets, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ActualizarGlobalsDto, CrearGlobalsDto } from '../dto';
import { Globals } from '../entity';
import { GlobalsEstado } from '../constant';
import { PaginacionQueryDto } from '@/common/dto/paginacion-query.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class GlobalsRepository {
  constructor(private dataSource: DataSource) {}

  async buscarPorId(id: string) {
    return await this.dataSource
      .getRepository(Globals)
      .createQueryBuilder('globals')
      .where({
        id: id,
      })
      .getOne();
  }

  async actualizar(id: string, parametroDto: ActualizarGlobalsDto) {
    const datosActualizar = new Globals({
      ...parametroDto,
    });
    try {
      return await this.dataSource
        .getRepository(Globals)
        .update(id, datosActualizar);
    } catch (error) {
      console.log(error);
      throw new RpcException({
        message: error.message,
        status: error.status,
      });
    }
  }

  async listar(paginacionQueryDto: PaginacionQueryDto) {
    const { limite, saltar, filtro, orden, sentido } = paginacionQueryDto;
    const query = this.dataSource
      .getRepository(Globals)
      .createQueryBuilder('globals')
      .select([
        'globals.id',
        'globals.grupo',
        'globals.descripcion',
        'globals.catalogoId',
        'globals.tablaId',
      ])
      .take(limite)
      .skip(saltar);

    switch (orden) {
      case 'grupo':
        query.addOrderBy('globals.grupo', sentido);
        break;
      case 'descripcion':
        query.addOrderBy('globals.descripcion', sentido);
        break;
      case 'estado':
        query.addOrderBy('globals.estado', sentido);
        break;
      default:
        query.orderBy('globals.id', 'ASC');
    }

    if (filtro) {
      query.andWhere(
        new Brackets((qb) => {
          qb.orWhere('globals.grupo like :filtro', {
            filtro: `%${filtro}%`,
          });
          qb.orWhere('globals.descripcion ilike :filtro', {
            filtro: `%${filtro}%`,
          });
        }),
      );
    }
    return await query.getManyAndCount();
  }

  async listarPorGrupo(grupo: string) {
    return await this.dataSource
      .getRepository(Globals)
      .createQueryBuilder('globals')
      .select([
        'globals.id',
        'globals.grupo',
        'globals.descripcion',
        'globals.catalogoId',
        'globals.tablaId',
      ])
      .where('globals.grupo = :grupo', {
        grupo,
      })
      .andWhere('globals.estado = :estado', {
        estado: GlobalsEstado.ACTIVO,
      })
      .getMany();
  }

  async crear(parametroDto: CrearGlobalsDto) {
    try {
      const { grupo, descripcion, usuarioCreacion, catalogoId, tablaId } =
        parametroDto;

      const parametro = new Globals();

      parametro.tablaId = tablaId;
      parametro.catalogoId = catalogoId;
      parametro.grupo = grupo;
      parametro.descripcion = descripcion;
      parametro.usuarioCreacion = usuarioCreacion;

      return await this.dataSource.getRepository(Globals).save(parametro);
    } catch (error) {
      console.log(error);
      throw new RpcException({
        message: error.message,
        status: error.status,
      });
    }
  }
}
