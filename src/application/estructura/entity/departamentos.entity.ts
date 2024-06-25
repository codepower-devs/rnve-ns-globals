import dotenv from 'dotenv';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

dotenv.config();
@Entity({
  name: 'departamentos',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  // synchronize: false,
})
export class Departamentos {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  @Column('varchar', {
    name: 'departamento',
    nullable: true,
  })
  departamento: string;

  @Column('varchar', {
    name: 'sigladepto',
    nullable: true,
  })
  sigladepto: string;
}
