import { BaseService } from '@/common/base/base-service';
import { Inject, Injectable } from '@nestjs/common';
import { NivelInformacionRepository } from '../repository';

@Injectable()
export class NivelInformacionService extends BaseService {
  constructor(
    @Inject(NivelInformacionRepository)
    private parametroRepositorio: NivelInformacionRepository,
  ) {
    super();
  }

  async listar() {
    return await this.parametroRepositorio.listarNivelInformacion();
  }
}
