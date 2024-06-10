import { BaseController } from '@/common/base';
import { PaginacionQueryDto } from '@/common/dto/paginacion-query.dto';
import { ParamIdDto } from '@/common/dto/params-id.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ActualizarGlobalsDto, CrearGlobalsDto, ParamGrupoDto } from '../dto';
import { GlobalsService } from '../service';

@Controller('catalogos')
export class GlobalsController extends BaseController {
  constructor(private catalogoervicio: GlobalsService) {
    super();
  }

  @MessagePattern({ cmd: 'listar-catalogos' })
  async listar(@Payload() paginacionQueryDto: PaginacionQueryDto) {
    const result = await this.catalogoervicio.listar(paginacionQueryDto);
    return this.successListRows(result);
  }

  @MessagePattern({ cmd: 'listar-catalogos-grupo' })
  async listarPorGrupo(@Payload() params: ParamGrupoDto) {
    const { grupo } = params;
    const result = await this.catalogoervicio.listarPorGrupo(grupo);
    return this.successList(result);
  }

  @MessagePattern({ cmd: 'crear-catalogo' })
  async crear(@Payload() catalogoDto: CrearGlobalsDto) {
    const result = await this.catalogoervicio.crear(catalogoDto);
    return this.successCreate(result);
  }

  @MessagePattern({ cmd: 'actualizar-catalogo' })
  async actualizar(@Payload() catalogoDto: ActualizarGlobalsDto) {
    const result = await this.catalogoervicio.actualizarDatos(catalogoDto);
    return this.successUpdate(result);
  }

  @MessagePattern({ cmd: 'activar-catalogo' })
  async activar(@Payload() params: ParamIdDto) {
    const { id } = params;
    const result = await this.catalogoervicio.activar(id);
    return this.successUpdate(result);
  }

  @MessagePattern({ cmd: 'inactivar-catalogo' })
  async inactivar(@Payload() params: ParamIdDto) {
    const { id } = params;
    const result = await this.catalogoervicio.inactivar(id);
    return this.successUpdate(result);
  }
}
