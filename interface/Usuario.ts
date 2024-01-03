import { Centro } from "./Centro";
import { Endereco } from "./Endereco";

export interface Usuario {
    id: number;
    nome: string;
    cpf: string;
    dataNasc: Date;
    email: string;
    senha: string;
    status: boolean;
    nomeSocial?: string;
    dataDeFardamento?: Date;
    centroDeOrigem?: string;
    sexo?: string;
    telefone?: string;
    tipo?: string;
    dataDeFiliacao?: Date;
    dataDeDesfiliacao?: Date;
    valorMensalidade?: number;
    endereco?: Endereco;
    centro?: Centro[];
    [key: string]: number | string | boolean | Date | undefined | Endereco | Centro[];
  }