import { BaseService } from '@/common/base/base-service';
import { Inject, Injectable } from '@nestjs/common';
import { ProvinciasRepository } from '../repository';

@Injectable()
export class ProvinciasService extends BaseService {
  constructor(
    @Inject(ProvinciasRepository)
    private parametroRepositorio: ProvinciasRepository,
  ) {
    super();
  }

  async listarProvinciasPorDepto(deptoId: number) {
    return await this.parametroRepositorio.listarProvinciasPorDepto(deptoId);
  }
}
