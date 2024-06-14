import dotenv from 'dotenv';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

dotenv.config();
@Entity({
  name: 'nivel_gestioninformacion',
  schema: process.env.DB_SCHEMA_PARAMETRICAS,
  synchronize: false,
})
export class NivelInformacion {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Clave primaria de la tabla Parámetro',
  })
  id: string;

  @Column()
  precedente: string;

  @Column()
  descripcion: string;

  @Column()
  estado_id?: string;
}
