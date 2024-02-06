/// <reference types="cypress" />
let el = require('../elements/cadastroElements').CADASTRO
const { set, click, get_text } = require('../actions');

class Cadastro {

    validaCadastroPage() {
        return get_text(el.validaPage)
    }

    preencheDadosPessoais(nome, email, cpf) {
        if (nome !== null) {
            set(el.campoNome, nome);
        }
        if (email !== null) {
            set(el.campoEmail, email);
        }
        if (cpf !== null) {
            set(el.campoCpf, cpf);
        }
    }

    preencheEndereco(cep, numero, complemento) {
        if (cep !== null) {
            set(el.campoCep, cep);
        }
        if (numero !== null) {
            set(el.campoNumero, numero);
        }
        if (complemento !== null) {
            set(el.campoComp, complemento);
        }
    }

    clickCep() {
        click(el.btBuscarCep)
    }

    opcaoCuidar() {
        click(el.btCuidar)
    }

    opcaoAdestrar() {
        click(el.btAdestrar)
    }

    clickCadastrar() {
        click(el.btCadastrar)
    }

    validaCadastro() {
        return get_text(el.messageSucesso)
    }

    validaMessagemErro() {
        return get_text(el.alertErro)
    }
}

export default new Cadastro();