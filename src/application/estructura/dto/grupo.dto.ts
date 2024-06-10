import { IsNotEmpty, IsString, Length } from '@/common/validation';
export class ParamGrupoDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  grupo: string;
}

export class ParamPrivinciasDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 9)
  departamento_id: string;
}

export class ParamMunicipiosDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  provincia_id: string;
}

export class ParamInstitucionesDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  subsector_id: string;
}

export class ParamEstablecimineotsDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  institucion_id: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  municipio_id: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  red_id: string;

  /*
  
  @IsString()
  @IsOptional()
  departamento_id?: string;

  
  @IsString()
  @IsOptional()
  idgestion?: string;*/
}
