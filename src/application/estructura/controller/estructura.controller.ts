import { Controller } from '@nestjs/common';
import { BaseController } from '@/common/base';

import {
  DepartamentoService,
  EstablecimientoService,
  InstitucionesService,
  MunicipiosService,
  NivelInformacionService,
  ProvinciasService,
  RedesService,
  SubsectoresService,
} from '../service';
import {
  ParamEstablecimineotsDto,
  ParamInstitucionesDto,
  ParamMunicipiosDto,
  ParamPrivinciasDto,
} from '../dto/grupo.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('estructura')
export class EstructuraController extends BaseController {
  constructor(
    private readonly departamentoService: DepartamentoService,
    private readonly establecimientoService: EstablecimientoService,
    private readonly institucionesService: InstitucionesService,
    private readonly municipiosService: MunicipiosService,
    private readonly provinciasService: ProvinciasService,
    private readonly redesService: RedesService,
    private readonly subsectoresService: SubsectoresService,
    private readonly nivelInformacionService: NivelInformacionService,
  ) {
    super();
  }

  @MessagePattern({ cmd: 'nivel-informacion' })
  async listarNivelInformacion() {
    const result = await this.nivelInformacionService.listar();
    return this.successList(result);
  }

  @MessagePattern({ cmd: 'subsectores' })
  async listarSubsector() {
    const result = await this.subsectoresService.listarSubsector();
    return this.successList(result);
  }

  @MessagePattern({ cmd: 'departamentos' })
  async listarDepartamentos() {
    const result = await this.departamentoService.listar();
    return this.successList(result);
  }

  @MessagePattern({ cmd: 'provincias-por-departamento' })
  async listarProvinciasPorDepto(@Payload() params: ParamPrivinciasDto) {
    const { departamento_id } = params;
    const result =
      await this.provinciasService.listarProvinciasPorDepto(+departamento_id);
    return this.successList(result);
  }

  @MessagePattern({ cmd: 'municipios-por-provincia' })
  async listarMunicipiosPorProvincia(@Payload() params: ParamMunicipiosDto) {
    const { provincia_id } = params;
    const result =
      await this.municipiosService.listarMunicipiosPorProvincia(+provincia_id);

    return this.successList(result);
  }

  @MessagePattern({ cmd: 'redes-por-departamento' })
  async listarRedesPorDepto(@Payload() params: ParamPrivinciasDto) {
    const { departamento_id } = params;
    const result =
      await this.redesService.listarRedesPorDepto(+departamento_id);

    return this.successList(result);
  }

  @MessagePattern({ cmd: 'instituciones-por-subsector' })
  async listarInstitucinPorSubsector(@Payload() params: ParamInstitucionesDto) {
    const { subsector_id } = params;
    const result =
      await this.institucionesService.listarInstitucinPorSubsector(
        +subsector_id,
      );

    return this.successList(result);
  }

  @MessagePattern({ cmd: 'instituciones' })
  async listarInstitucion() {
    const result = await this.institucionesService.listarInstitucin();

    return this.successList(result);
  }

  @MessagePattern({ cmd: 'establecimientos-por-params' })
  async listarEstablecimientosPorParams(
    @Payload() params: ParamEstablecimineotsDto,
  ) {
    const { institucion_id, municipio_id, red_id } = params;
    const result = await this.establecimientoService.listar(
      +institucion_id,
      +municipio_id,
      +red_id,
    );

    return this.successList(result);
  }

  @MessagePattern({ cmd: 'listar-combos-global' })
  async listarcombosglobal(@Payload() params) {
    const { iddepar, idred } = params;
    const result = await this.departamentoService.listarcombos(iddepar, idred);
    return this.successList(result);
  }
}
