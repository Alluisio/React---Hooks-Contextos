import React, { Component } from "react";

const ValidacoesCadastro = React.createContext({
  cpf: semValidacao,
  senha: semValidacao,
  nome: semValidacao,
});

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texo: "" };
}

export default ValidacoesCadastro;
