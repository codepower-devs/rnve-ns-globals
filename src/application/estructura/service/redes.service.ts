import { BaseService } from '@/common/base/base-service';
import { Inject, Injectable } from '@nestjs/common';
import { RedRepository } from '../repository';

@Injectable()
export class RedesService extends BaseService {
  constructor(
    @Inject(RedRepository)
    private parametroRepositorio: RedRepository,
  ) {
    super();
  }
  async listarRedesPorDepto(deptoId: number) {
    return await this.parametroRepositorio.listarRedesPorDepto(deptoId);
  }
}
