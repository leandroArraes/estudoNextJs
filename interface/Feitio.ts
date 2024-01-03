import { Centro } from "./Centro";

export interface Feitio {
    id: number;
    nome: string;
    inicioData: string; // ou tipo Date
    terminoData: string; // ou tipo Date
    duracao?: number;
    status?: number;
    observacao: string;
    centro: Centro;
    //fornalhas: Fornalha[];
  }