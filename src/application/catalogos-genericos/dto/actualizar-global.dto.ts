import { IsNotEmpty } from '@/common/validation';

export class ActualizarGlobalsDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  tablaId: number;

  @IsNotEmpty()
  catalogoId: number;

  @IsNotEmpty()
  grupo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  estado: string;

  @IsNotEmpty()
  usuarioModificacion?: string;
}
