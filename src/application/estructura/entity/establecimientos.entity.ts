import dotenv from 'dotenv';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

dotenv.config();
@Entity({
  name: 'establecimientos',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  synchronize: false,
})
export class Establecimientos {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  @Column({
    name: 'establecimiento',
    nullable: true,
  })
  establecimiento: string;

  @Column('varchar', {
    name: 'subsector',
    nullable: true,
  })
  subsector: string;

  @Column({
    name: 'institucion_id',
    nullable: true,
  })
  institucionId: string;

  @Column('varchar', {
    name: 'institucion',
    nullable: true,
  })
  institucion: string;

  @Column({
    name: 'tipo',
    nullable: true,
  })
  tipo: string;

  @Column('varchar', {
    name: 'nivel',
    nullable: true,
  })
  nivel: string;

  @Column({
    name: 'ambito',
    nullable: true,
  })
  ambito: string;

  @Column({
    name: 'departamento_id',
    nullable: true,
  })
  departamentoId: string;

  @Column('varchar', {
    name: 'departamento',
    nullable: true,
  })
  departamento: string;

  @Column({
    name: 'red_id',
    nullable: true,
  })
  redId: string;

  @Column('varchar', {
    name: 'red',
    nullable: true,
  })
  red: string;

  @Column({
    name: 'municipio_id',
    nullable: true,
  })
  municipioId: string;

  @Column('varchar', {
    name: 'municipio',
    nullable: true,
  })
  municipio: string;

  @Column('varchar', {
    name: 'localidad',
    nullable: true,
  })
  localidad: string;

  @Column({
    name: 'idgestion',
    nullable: true,
  })
  gestionId: string;

  @Column('varchar', {
    name: 'gestion',
    nullable: true,
  })
  bajalogica: string;

  @Column({
    name: 'estado_id',
    default: '1',
  })
  estadoId: string;
}
