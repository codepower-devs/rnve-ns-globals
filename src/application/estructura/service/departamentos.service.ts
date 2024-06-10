import { BaseService } from '@/common/base/base-service';
import { Inject, Injectable } from '@nestjs/common';
import { DepartamentosRepository } from '../repository';

@Injectable()
export class DepartamentoService extends BaseService {
  constructor(
    @Inject(DepartamentosRepository)
    private parametroRepositorio: DepartamentosRepository,
  ) {
    super();
  }

  async listar() {
    return await this.parametroRepositorio.listarDepartamentos();
  }

  async listarcombos(depar: number, redentra: number) {
    return await this.parametroRepositorio.listarCombosrepo(depar, redentra);
  }
}
