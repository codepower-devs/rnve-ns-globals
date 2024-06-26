import dotenv from 'dotenv';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

dotenv.config();
@Entity({
  name: 'provincias',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  // synchronize: false,
})
export class Provincias {
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

  @Column()
  provincia: string;
}
