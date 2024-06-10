import { BaseService } from '@/common/base/base-service';
import { Inject, Injectable } from '@nestjs/common';
import { MunicipiosRepository } from '../repository';

@Injectable()
export class MunicipiosService extends BaseService {
  constructor(
    @Inject(MunicipiosRepository)
    private parametroRepositorio: MunicipiosRepository,
  ) {
    super();
  }

  async listarMunicipiosPorProvincia(provinciaId: number) {
    return await this.parametroRepositorio.listarMunicipiosPorProvincia(
      provinciaId,
    );
  }
}
