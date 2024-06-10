import { BaseService } from '@/common/base/base-service';
import { Inject, Injectable } from '@nestjs/common';
import {
  EstablecimientosGestionRepository,
  EstablecimientosRepository,
} from '../repository';

@Injectable()
export class EstablecimientoService extends BaseService {
  constructor(
    @Inject(EstablecimientosRepository)
    private establecimientoRepositorio: EstablecimientosRepository,

    @Inject(EstablecimientosGestionRepository)
    private establecimientoRepositorioG: EstablecimientosGestionRepository,
  ) {
    super();
  }

  async listar(institucionId: number, municipioId: number, redId: number) {
    return await this.establecimientoRepositorio.listarEstablecimineotsPorParams(
      institucionId,
      municipioId,
      redId,
    );
  }

  async listarGestion(
    institucionId: number,
    municipioId: number,
    redId: number,
  ) {
    return await this.establecimientoRepositorioG.listarEstablecimineotsPorParams(
      institucionId,
      municipioId,
      redId,
    );
  }
}
