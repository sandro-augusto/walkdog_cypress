var el = require('../support/elements/elPage').CADASTRO
import { faker, fakerPT_BR } from '@faker-js/faker'
import 'cypress-file-upload';

describe('Acessando a Pagina Home', () => {
  it('Home', () => {
    cy.home()
  })
  it('Validando pagina de cadastro', () => {
    cy.pagCadastro()
  })
  it('Cadastrando clientes para Passear com os cães', () => {
    cy.pagCadastro()
    cy.cadastro()
    cy.get(el.btPassear).click()
    cy.validacao()
  })
  it('Cadastrando clientes para Cuidar dos cães', () => {
    cy.pagCadastro()
    cy.cadastro()
    cy.get(el.btCuidar).click()
    cy.validacao()
  })
  it('Cadastrando clientes para Adestrar os cães', () => {
    cy.pagCadastro()
    cy.cadastro()
    cy.get(el.btAdestrar).click()
    cy.validacao()
  })
  it('Validando mensagens dos campos Obrigatórios', () => {
    cy.pagCadastro()
    cy.get(el.btCadastrar).click()
    cy.alertErro()
  })
})


    



