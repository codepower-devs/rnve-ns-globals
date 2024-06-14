import dotenv from 'dotenv';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Municipioredgestion } from './municipio_redgestion.entity';

dotenv.config();
@Entity({
  name: 'municipios',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  synchronize: false,
})
export class Municipios {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  @Column({
    name: 'provincia_id',
  })
  provinciaId: string;

  @Column({
    name: 'municipio',
  })
  municipio: string;

  @OneToMany(() => Municipioredgestion, (mun) => mun.id)
  @JoinColumn({ name: 'id', referencedColumnName: 'municipioId' })
  muniRedGestion: Municipioredgestion;

  // @ManyToOne(() => Municipioredgestion, (mun) => mun.id)
  // @JoinColumn({ name: 'id', referencedColumnName: 'municipioId' })
  // muniRedGestion: Municipioredgestion;
}
