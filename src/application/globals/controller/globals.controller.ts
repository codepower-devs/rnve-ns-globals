import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { GlobalsService } from '../service';
import { PaginacionQueryDto } from '@/common/dto/paginacion-query.dto';
import { BaseController } from '@/common/base';
import { ParamIdDto } from '@/common/dto/params-id.dto';
import { Request } from 'express';
import { ActualizarGlobalsDto, CrearGlobalsDto, ParamGrupoDto } from '../dto';
import { ApiBody, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('Catalogos Genericos')
@Controller('catalogos')
export class GlobalsController extends BaseController {
  constructor(private parametroServicio: GlobalsService) {
    super();
  }

  @ApiOperation({ summary: 'API para obtener el listado de parámetros' })
  @Get()
  async listar(@Query() paginacionQueryDto: PaginacionQueryDto) {
    const result = await this.parametroServicio.listar(paginacionQueryDto);
    return this.successListRows(result);
  }

  @ApiOperation({
    summary: 'API para obtener el listado de parámetros por grupo',
  })
  @ApiProperty({
    type: ParamGrupoDto,
  })
  @Get('/:grupo/listado')
  async listarPorGrupo(@Param() params: ParamGrupoDto) {
    const { grupo } = params;
    const result = await this.parametroServicio.listarPorGrupo(grupo);
    return this.successList(result);
  }

  @ApiOperation({ summary: 'API para crear un nuevo parámetro' })
  @ApiBody({
    type: CrearGlobalsDto,
    description:
      'Esta API permite crear un nuevo parámetro utilizando los datos proporcionados en el cuerpo de la solicitud.',
    required: true,
  })
  @Post()
  async crear(@Req() req: Request, @Body() parametroDto: CrearGlobalsDto) {
    const usuarioAuditoria = this.getUser(req);
    const result = await this.parametroServicio.crear(
      parametroDto,
      usuarioAuditoria,
    );
    return this.successCreate(result);
  }

  @ApiOperation({ summary: 'API para actualizar un parámetro' })
  @ApiProperty({
    type: ParamIdDto,
  })
  @ApiBody({
    type: ActualizarGlobalsDto,
    description:
      'Esta API permite actualizar un parámetro existente utilizando los atributos proporcionados en el cuerpo de la solicitud.',
    required: true,
  })
  @Patch(':id')
  async actualizar(
    @Param() params: ParamIdDto,
    @Req() req: Request,
    @Body() parametroDto: ActualizarGlobalsDto,
  ) {
    const { id: idParametro } = params;
    const usuarioAuditoria = this.getUser(req);
    const result = await this.parametroServicio.actualizarDatos(
      idParametro,
      parametroDto,
      usuarioAuditoria,
    );
    return this.successUpdate(result);
  }

  @ApiOperation({ summary: 'API para activar un parámetro' })
  @ApiProperty({
    type: ParamIdDto,
  })
  @Patch('/:id/activacion')
  async activar(@Req() req: Request, @Param() params: ParamIdDto) {
    const { id: idParametro } = params;
    const usuarioAuditoria = this.getUser(req);
    const result = await this.parametroServicio.activar(
      idParametro,
      usuarioAuditoria,
    );
    return this.successUpdate(result);
  }

  @ApiOperation({ summary: 'API para inactivar un parámetro' })
  @ApiProperty({
    type: ParamIdDto,
  })
  @Patch('/:id/inactivacion')
  async inactivar(@Req() req: Request, @Param() params: ParamIdDto) {
    const { id: idParametro } = params;
    const usuarioAuditoria = this.getUser(req);
    const result = await this.parametroServicio.inactivar(
      idParametro,
      usuarioAuditoria,
    );
    return this.successUpdate(result);
  }
}