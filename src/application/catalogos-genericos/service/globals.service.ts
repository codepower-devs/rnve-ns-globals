import { BaseService } from '@/common/base/base-service';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { GlobalsRepository } from '../repository';
import { PaginacionQueryDto } from '@/common/dto/paginacion-query.dto';
import { Messages } from '@/common/constants/response-messages';
import { ActualizarGlobalsDto, CrearGlobalsDto } from '../dto';
import { GlobalsEstado } from '../constant';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class GlobalsService extends BaseService {
  constructor(
    @Inject(GlobalsRepository)
    private catalogoRepositorio: GlobalsRepository,
  ) {
    super();
  }

  async crear(catalogoDto: CrearGlobalsDto) {
    return await this.catalogoRepositorio.crear(catalogoDto);
  }

  async listar(paginacionQueryDto: PaginacionQueryDto) {
    return await this.catalogoRepositorio.listar(paginacionQueryDto);
  }

  async listarPorGrupo(grupo: string) {
    return await this.catalogoRepositorio.listarPorGrupo(grupo);
  }

  async actualizarDatos(catalogoDto: ActualizarGlobalsDto) {
    const { id } = catalogoDto;
    const catalogo = await this.catalogoRepositorio.buscarPorId(id);
    if (!catalogo) {
      throw new RpcException({
        message: Messages.EXCEPTION_NOT_FOUND,
        status: HttpStatus.BAD_REQUEST,
      });
    }
    await this.catalogoRepositorio.actualizar(id, catalogoDto);
    return { id };
  }

  async activar(id: string) {
    const catalogo = await this.catalogoRepositorio.buscarPorId(id);
    if (!catalogo) {
      throw new RpcException({
        message: Messages.EXCEPTION_NOT_FOUND,
        status: HttpStatus.BAD_REQUEST,
      });
    }
    const catalogoDto = new ActualizarGlobalsDto();
    catalogoDto.estado = GlobalsEstado.ACTIVO;
    await this.catalogoRepositorio.actualizar(id, catalogoDto);
    return {
      id: id,
      estado: catalogoDto.estado,
    };
  }

  async inactivar(id: string) {
    const catalogo = await this.catalogoRepositorio.buscarPorId(id);
    if (!catalogo) {
      throw new RpcException({
        message: Messages.EXCEPTION_NOT_FOUND,
        status: HttpStatus.BAD_REQUEST,
      });
    }
    const catalogoDto = new ActualizarGlobalsDto();
    catalogoDto.estado = GlobalsEstado.INACTIVO;
    await this.catalogoRepositorio.actualizar(id, catalogoDto);
    return {
      id: id,
      estado: catalogoDto.estado,
    };
  }
}
