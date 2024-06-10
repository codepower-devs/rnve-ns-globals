import { IsNotEmpty } from '@/common/validation';

export class CrearGlobalsDto {
  @IsNotEmpty()
  tablaId: number;

  @IsNotEmpty()
  catalogoId: number;

  @IsNotEmpty()
  grupo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  usuarioCreacion: string;
}

export class RespuestaCrearGlobalsDto {
  @IsNotEmpty()
  id: string;
}
