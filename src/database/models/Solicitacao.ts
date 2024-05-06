import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  TableInheritance,
} from "typeorm";
import type { Relation } from "typeorm";
import { Usuario } from "./Usuario";
import {
  EstadosSolicitacao,
  TiposAuxilios,
  TiposProblemas,
} from "@/lib/enums/Solicitacao";

@Entity("solicitacoes")
@TableInheritance({
  column: "descriminador",
})
export class Solicitacao {
  @PrimaryColumn({ type: "char", length: 36 })
  id: string;

  @Column({ type: "enum", enum: TiposAuxilios, name: "descriminador" })
  descriminador: TiposAuxilios;

  @ManyToOne(() => Usuario, { nullable: false })
  @JoinColumn({ name: "usuario_id" })
  usuario: Relation<Usuario>;

  @Column({ type: "char", length: 36 })
  usuario_id: string;

  @Column({
    type: "enum",
    enum: EstadosSolicitacao,
    default: EstadosSolicitacao.Pendente,
  })
  estado: EstadosSolicitacao;

  @Column({ type: "enum", enum: TiposProblemas })
  tipo_problema: TiposProblemas;

  @Column("text")
  descricao_problema: string;
}
