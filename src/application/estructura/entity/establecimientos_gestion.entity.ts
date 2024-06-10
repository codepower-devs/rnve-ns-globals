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
  name: 'establecimientos_gestion',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
})
export class EstablecimientosGestion extends AuditoriaEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  @Column({
    name: 'establecimiento_id',
  })
  establecimientoId: string;

  @Column()
  establecimiento: string;

  @Column()
  subsector: string;

  @Column({
    name: 'institucion_id',
  })
  institucionId: string;

  @Column()
  institucion: string;

  @Column()
  tipo: string;

  @Column()
  nivel: string;

  @Column()
  ambito: string;

  @Column({
    name: 'departamento_id',
  })
  departamentoId: string;

  @Column()
  departamento: string;

  @Column({
    name: 'red_id',
  })
  redId: string;

  @Column()
  red: string;

  @Column({
    name: 'municipio_id',
  })
  municipioId: string;

  @Column()
  municipio: string;

  @Column()
  localidad: string;

  @Column({
    name: 'idgestion',
  })
  gestionId: string;

  @Column()
  bajalogica: string;

  @Column({
    name: 'estado_id',
  })
  estadoId: string;

  constructor(data?: Partial<EstablecimientosGestion>) {
    super(data);
  }

  @BeforeInsert()
  insertarEstado() {
    this.estado = this.estado || GlobalsEstado.ACTIVO;
  }
}
