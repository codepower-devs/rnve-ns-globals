import { IsNotEmpty, IsOptional } from '@/common/validation';

export class CrearGlobalsDto {
  @IsNotEmpty()
  codigo: string;

  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  grupo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsOptional()
  estado?: string;
}

export class RespuestaCrearGlobalsDto {
  @IsNotEmpty()
  id: string;
}
