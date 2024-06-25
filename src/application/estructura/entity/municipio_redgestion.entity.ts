import dotenv from 'dotenv';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Municipios } from './municipios.entity';
import { Redgestion } from './red_gestion.entity';

dotenv.config();
@Entity({
  name: 'municipio_redgestion',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  // synchronize: false,
})
export class Municipioredgestion {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  // @ManyToOne(() => Municipios, mun => mun.id)
  // @JoinColumn({ name: 'municipio_id', referencedColumnName: 'id' })
  @Column({
    name: 'municipio_id',
  })
  municipioId: string;

  @Column({
    name: 'red_id',
  })
  redId: string;

  @Column({
    name: 'idgestion',
  })
  idGestion: string;

  @ManyToOne(() => Municipios, (ent) => ent.id)
  @JoinColumn({ name: 'municipio_id', referencedColumnName: 'id' })
  municipios: Municipios;

  @ManyToOne(() => Redgestion, (ent) => ent.redId)
  @JoinColumn({ name: 'red_id', referencedColumnName: 'redId' })
  muniRedGestionId: Redgestion;

  // @ManyToOne(() => Redgestion, (ent) => ent.idGestion)
  // @JoinColumn({ name: 'idgestion', referencedColumnName: 'idGestion' })
  // muniRedGestionGes: Redgestion;

  // @OneToMany(() => Municipios, (ent) => ent.id)
  // municipios: Municipios;

  // @OneToMany(() => Redgestion, (ent) => ent.redId)
  // muniRedgestionId: Redgestion[];

  // @OneToMany(() => Redgestion, (ent) => ent.idGestion)
  // muniRedGestionGes: Redgestion[];
}
