import { BaseController } from '@/common/base';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ActualizarGlobalsDto, CrearGlobalsDto } from '../dto';
import { TablasService } from '../service';

@Controller('tablas')
export class TablasController extends BaseController {
  constructor(private tablaService: TablasService) {
    super();
  }

  @MessagePattern({ cmd: 'listar-tablas' })
  async listar() {
    const result = await this.tablaService.listar();
    return this.successList(result);
  }

  @MessagePattern({ cmd: 'crear-tabla' })
  async crear(@Payload() tablaDto: CrearGlobalsDto) {
    const result = await this.tablaService.crear(tablaDto);
    return this.successCreate(result);
  }

  @MessagePattern({ cmd: 'actualizar-tabla' })
  async actualizar(@Payload() tablaDto: ActualizarGlobalsDto) {
    const result = await this.tablaService.actualizarDatos(tablaDto);
    return this.successUpdate(result);
  }
}
