import { IsNotEmpty } from '@/common/validation';
export class CrearEstablecimientoDto {
  establecimiento?: string;

  subsector?: string;

  @IsNotEmpty()
  institucionId: number;

  institucion?: string;

  tipo?: string;

  nivel?: string;

  ambito?: string;

  @IsNotEmpty()
  departamentoId: number;

  departamento?: string;

  redId: number;

  red?: string;

  municipioId?: number;

  municipio?: string;

  localidad?: string;

  gestionId: number;

  bajalogica?: string;

  estadoId?: number;

  estado?: string;
}
