import { UtilService } from '@/common/lib/util.service';
import {
  BeforeInsert,
  Check,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditoriaEntity } from '@/common/entity/auditoria.entity';
import { GlobalsEstado } from '../constant';
import dotenv from 'dotenv';
import { Municipioredgestion } from './municipio_redgestion.entity';

dotenv.config();
@Check(UtilService.buildStatusCheck(GlobalsEstado))
@Entity({
  name: 'red_gestion',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
})
export class Redgestion extends AuditoriaEntity {

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

  constructor(data?: Partial<Redgestion>) {
    super(data);
  }

  @BeforeInsert()
  insertarEstado() {
    this.estado = this.estado || GlobalsEstado.ACTIVO;
  }

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
