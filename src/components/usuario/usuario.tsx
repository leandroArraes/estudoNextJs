const Crud = () => {
    let usuarioVazio: meuTemplo.Usuario = {
        id: 0,
        nome: '',
        cpf: '',
        dataNasc: new Date(),
        email: '',
        senha: '',
        status: true,
        nomeSocial: '',
        dataDeFardamento: new Date(),
        centroDeOrigem: '',
        sexo: '',
        telefone: '',
        tipo: '',
        dataDeFiliacao: new Date(),
        dataDeDesfiliacao: new Date(),
        valorMensalidade: 0,
        endereco: {
            id: 0,
            pais: '',
            estado: '',
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            cep: '',
            complemento: ''
        },
        centro: []
    };
}