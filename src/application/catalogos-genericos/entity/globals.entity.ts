import { Tablas } from '@/application/tablas-genericos/entity';
import dotenv from 'dotenv';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

dotenv.config();

@Entity({
  name: 'catalogos_genericos',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  // synchronize: false,
})
export class Globals {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  @Column({
    type: 'bigint',
    name: 'catalogo_id',
    comment: 'Clave foránea de la tabla Catálogo',
  })
  catalogoId: number;

  @Column({
    type: 'bigint',
    name: 'tabla_id',
    comment: 'Clave foránea de la tabla Tabla',
  })
  tablaId: number;

  @Column({ length: 100, type: 'varchar', comment: 'Grupo de parámetro' })
  grupo: string;

  @Column({ length: 255, type: 'varchar', comment: 'Descripción de parámetro' })
  descripcion: string;

  @ManyToOne(() => Tablas, (Tabla) => Tabla.tablaId)
  tabla: Tablas;
}
