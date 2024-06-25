import dotenv from 'dotenv';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

dotenv.config();
@Entity({
  name: 'red',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  // synchronize: false,
})
export class Red {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  @Column({
    name: 'departamento_id',
  })
  departamentoId: string;

  @Column({
    name: 'red',
  })
  red: string;
}
