namespace meuTemplo {

  export type Endereco = {
    id: number;
    pais: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    cep: string;
    complemento: string;
    
  };
    export type Centro = {
      id: number;
      nome: string;
      cnpj: string;
      segmento: string;
      endereco: Endereco;
      feitio: Feitio[];
      usuarios: Usuario[];
    };
  
    export type Usuario = {
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
    };
  
    

    export type Feitio = {
        id: number;
        nome: string;
        inicioData: string; // ou tipo Date
        terminoData: string; // ou tipo Date
        duracao?: number;
        status?: number;
        observacao: string;
        centro: Centro;
        fornalhas: Fornalha[];
      };
  
      export type Feitio = {
        id: number;
        nome: string;
        inicioData: string; // ou tipo Date
        terminoData: string; // ou tipo Date
        duracao?: number;
        status?: number;
        observacao: string;
        centro: Centro;
        fornalhas: Fornalha[];
      };

    export type Fornalha = {
        id: number;
        nome: string;
        nBocas: number;
        status: boolean;
        feitio: Feitio;
        bocas: BocaFornalha[];
      };

      export type BocaFornalha = {
        id: number;
        nome: string;
        tempoMedio: number;
        fornalha: Fornalha;
        panela: Panela;
      };

      export type Panela = {
        id: number;
        Tag: number;
        nome: string;
        altura: number;
        diametro: number;
        litros: number;
        status: number;
        conteudos: Conteudo[];
        bocaFornalha: BocaFornalha;
      };

      export type Conteudo = {
        id: number;
        tipoConteudo: string;
        nome: string;
        ciclo: number;
        Grau: number;
        litros: number;
        folhaKG: number | null; // use 'null' se for possível que seja nulo
        CipoKG: number | null; // use 'null' se for possível que seja nulo
        status: number;
        abstecimentoTipo: string;
        panela: Panela;
      };
  }
  