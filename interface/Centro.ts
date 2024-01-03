import { Endereco } from "./Endereco";
import { Feitio } from "./Feitio";
import { Usuario } from "./usuario";

export interface Centro {
    id: number;
    nome: string;
    cnpj: string;
    segmento: string;
    endereco: Endereco;
    feitio: Feitio[];
    usuarios: Usuario[];
  }