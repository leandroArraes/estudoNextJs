'use client';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { useState, useEffect } from 'react';
import { UsuarioService } from '../../../../../service/usuarioService';
import { meuTemplo } from '../../../../../types/types';

const Teste = () => {
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

  const [usuarios, setUsuarios] = useState(null);
  const usuarioService = new UsuarioService();
  const [usuario, setUsuario] = useState<meuTemplo.Usuario>(usuarioVazio);

  useEffect(() => {
    usuarioService
      .listarTodos()
      .then((reponse) => {
        setUsuarios(reponse.data as any);
        console.log(reponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid h-80 ">
      <h1>Listando Usuarios</h1>
      {/* Renderize os dados do usuário aqui, se necessário */}
      <ul>
        {usuarios &&
          usuarios.map((usuario) => <li key={usuario.id}>{usuario.nomeSocial}</li>)}
      </ul>
    </div>
  );
};

export default Teste;
