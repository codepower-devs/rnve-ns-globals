import { Globals } from '@/application/catalogos-genericos/entity';
import dotenv from 'dotenv';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

dotenv.config();

@Entity({
  name: 'tablas_genericos',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  synchronize: false,
})
export class Tablas {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  @Column('bigint', {
    name: 'tabla_id',
    comment: 'Identificador de tabla',
  })
  tablaId: string;

  @Column({ length: 100, type: 'varchar', comment: 'Grupo de parámetro' })
  grupo: string;

  @Column({ length: 255, type: 'varchar', comment: 'Descripción de parámetro' })
  descripcion: string;

  @OneToMany(() => Globals, (globals) => globals.tablaId)
  catalogos: Globals[];
}
