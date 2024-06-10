import { UtilService } from '@/common/lib/util.service';
import {
  BeforeInsert,
  Check,
  Column,
  Entity,
  JoinColumn,
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
  name: 'municipios',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
})
export class Municipios extends AuditoriaEntity {
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

  constructor(data?: Partial<Municipios>) {
    super(data);
  }

  @BeforeInsert()
  insertarEstado() {
    this.estado = this.estado || GlobalsEstado.ACTIVO;
  }
  
  @OneToMany(() => Municipioredgestion, (mun) => mun.id)
  @JoinColumn({ name: 'id', referencedColumnName: 'municipioId' })
  muniRedGestion: Municipioredgestion;

  // @ManyToOne(() => Municipioredgestion, (mun) => mun.id)
  // @JoinColumn({ name: 'id', referencedColumnName: 'municipioId' })
  // muniRedGestion: Municipioredgestion;
}
