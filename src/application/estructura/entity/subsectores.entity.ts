import dotenv from 'dotenv';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

dotenv.config();
@Entity({
  name: 'subsectores',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  // synchronize: false,
})
export class Subsectores {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  @Column()
  codsubsector: string;

  @Column()
  subsector: string;

  @Column()
  abrevsubsector: string;
}
