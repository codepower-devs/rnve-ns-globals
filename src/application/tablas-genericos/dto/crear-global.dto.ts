import { IsNotEmpty } from '@/common/validation';

export class CrearGlobalsDto {
  @IsNotEmpty()
  tablaId: string;

  @IsNotEmpty()
  grupo: string;

  @IsNotEmpty()
  descripcion: string;
}

export class RespuestaCrearGlobalsDto {
  @IsNotEmpty()
  id: string;
}
