import { IsNotEmpty, IsString, Length } from '@/common/validation';

export class ParamGrupoDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  grupo: string;
}
