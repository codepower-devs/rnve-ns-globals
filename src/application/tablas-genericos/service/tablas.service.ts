import { BaseService } from '@/common/base/base-service';
import { Messages } from '@/common/constants/response-messages';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ActualizarGlobalsDto, CrearGlobalsDto } from '../dto';
import { TablasRepository } from '../repository';

@Injectable()
export class TablasService extends BaseService {
  constructor(
    @Inject(TablasRepository)
    private catalogoRepositorio: TablasRepository,
  ) {
    super();
  }

  async crear(catalogoDto: CrearGlobalsDto) {
    return await this.catalogoRepositorio.crear(catalogoDto);
  }

  async listar() {
    return await this.catalogoRepositorio.listar();
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
}
