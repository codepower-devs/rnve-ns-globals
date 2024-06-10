import { BaseService } from '@/common/base/base-service';
import { Inject, Injectable } from '@nestjs/common';
import { SubsectoresRepository } from '../repository';

@Injectable()
export class SubsectoresService extends BaseService {
  constructor(
    @Inject(SubsectoresRepository)
    private parametroRepositorio: SubsectoresRepository,
  ) {
    super();
  }

  async listarSubsector() {
    return await this.parametroRepositorio.listarSubsector();
  }
}
