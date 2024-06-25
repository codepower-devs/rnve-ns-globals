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
  name: 'red_gestion',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  //synchronize: false,
})
export class Redgestion {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'red_id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  redId: string;

  @Column({
    name: 'idgestion',
  })
  idGestion: string;

  @Column({
    name: 'red',
  })
  red: string;

  @Column({
    name: 'departamento_id',
  })
  departamentoId: string;

  // @Column({
  //   name: 'estado_id',
  // })
  // estadoId?: string | null;

  // @OneToMany(() => Municipioredgestion, (mun) => mun.redId)
  // municipioRedGestion: Municipioredgestion

  @OneToMany(() => Municipioredgestion, (mun) => mun.idGestion)
  @JoinColumn({ name: 'idgestion', referencedColumnName: 'idGestion' })
  muniRedGestion: Municipioredgestion[];

  @OneToMany(() => Municipioredgestion, (mun) => mun.redId)
  @JoinColumn({ name: 'red_id', referencedColumnName: 'redId' })
  muniRedId: Municipioredgestion[];

  // @ManyToOne(() => Municipioredgestion)
  // @JoinColumn({ name: 'idgestion', referencedColumnName: 'idGestion' })
  // muniRedGestion: Municipioredgestion;

  // @ManyToOne(() => Municipioredgestion)
  // @JoinColumn({ name: 'red_id', referencedColumnName: 'redId' })
  // muniRedId: Municipioredgestion;
}
