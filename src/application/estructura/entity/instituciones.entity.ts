import dotenv from 'dotenv';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

dotenv.config();
@Entity({
  name: 'instituciones',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  synchronize: false,
})
export class Instituciones {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  @Column({
    name: 'subsector_id',
    nullable: true,
  })
  subsectorId: string;

  @Column('varchar', {
    name: 'institucion',
    nullable: true,
  })
  institucion: string;

  @Column('varchar', {
    name: 'codinstitucion',
    nullable: true,
  })
  codinstitucion: string;
}
