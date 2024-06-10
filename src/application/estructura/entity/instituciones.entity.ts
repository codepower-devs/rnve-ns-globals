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
  name: 'instituciones',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
})
export class Instituciones extends AuditoriaEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  @Column({
    name: 'subsector_id',
  })
  subsectorId: string;

  @Column()
  institucion: string;

  @Column()
  codinstitucion: string;

  constructor(data?: Partial<Instituciones>) {
    super(data);
  }

  @BeforeInsert()
  insertarEstado() {
    this.estado = this.estado || GlobalsEstado.ACTIVO;
  }
}
