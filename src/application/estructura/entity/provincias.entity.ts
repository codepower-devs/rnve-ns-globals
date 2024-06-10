import { UtilService } from '@/common/lib/util.service';
import {
  BeforeInsert,
  Check,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditoriaEntity } from '@/common/entity/auditoria.entity';
import { GlobalsEstado } from '../constant';
import dotenv from 'dotenv';

dotenv.config();
@Check(UtilService.buildStatusCheck(GlobalsEstado))
@Entity({
  name: 'provincias',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
})
export class Provincias extends AuditoriaEntity {
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

  constructor(data?: Partial<Provincias>) {
    super(data);
  }

  @BeforeInsert()
  insertarEstado() {
    this.estado = this.estado || GlobalsEstado.ACTIVO;
  }
}
