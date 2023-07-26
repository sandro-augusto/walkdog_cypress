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
  it.only('Cadastrando clientes para Passear com os cães', () => {
    cy.pagCadastro()
    cy.cadastro()
    cy.get(el.btPassear).click()
    cy.get('.dropzone > p').selectFile('cypress/fixtures/images/cnh.png')
  })
  it('Cadastrando clientes para Cuidar dos cães', () => {
    cy.pagCadastro()
    cy.cadastro()
    cy.get(el.btCuidar).click()
  })
  it('Cadastrando clientes para Adestrar os cães', () => {
    cy.pagCadastro()
    cy.cadastro()
    cy.get(el.btAdestrar).click()
  })
})

Cypress.Commands.add('home', () => {
  cy.visit('https://walkdog.vercel.app/')
  cy.contains('h1', 'Cuidado e diversão em cada passo!')
})

Cypress.Commands.add('pagCadastro', () => {
  cy.visit('https://walkdog.vercel.app/')
  cy.contains('h1', 'Cuidado e diversão em cada passo!')
  cy.get(el.btLogin).click()
  cy.contains('h1', 'Faça seu cadastro')
})

Cypress.Commands.add('cadastro', () => {
  cy.get(el.campoNome).type(faker.person.fullName())
  cy.get(el.campoEmail).type(faker.internet.exampleEmail())
  cy.get(el.campoCpf).type(faker.random.numeric(11))
  cy.get(el.campoCep).type(50760170)
  cy.get(el.btBuscarCep).click()
  cy.get(el.campoNumero).type(faker.random.numeric(4))
  cy.get(el.campoComp).type('casa')
})


    



