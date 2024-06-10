import { BaseService } from '@/common/base/base-service';
import { Inject, Injectable } from '@nestjs/common';
import { InstitucionesRepository } from '../repository';

@Injectable()
export class InstitucionesService extends BaseService {
  constructor(
    @Inject(InstitucionesRepository)
    private parametroRepositorio: InstitucionesRepository,
  ) {
    super();
  }

  async listarInstitucinPorSubsector(subsectorId: number) {
    return await this.parametroRepositorio.listarInstitucinPorSubsector(
      subsectorId,
    );
  }
  async listarInstitucin() {
    return await this.parametroRepositorio.listarInstitucion();
  }
}
