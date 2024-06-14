import { IsNotEmpty } from '@/common/validation';

export class ActualizarGlobalsDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  tablaId: string;

  @IsNotEmpty()
  grupo: string;

  @IsNotEmpty()
  descripcion: string;
}
