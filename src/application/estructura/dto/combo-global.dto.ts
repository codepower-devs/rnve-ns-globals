import { IsOptional } from 'class-validator';

export class ComboGlobalDto {
  @IsOptional()
  departamento?: string;

  @IsOptional()
  red?: string;

  @IsOptional()
  municipio?: string;

  @IsOptional()
  establecimiento?: string;

  //
  //   estado?: string;
}
