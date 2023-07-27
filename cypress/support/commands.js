// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';


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
  
  Cypress.Commands.add('validacao', () => {
    cy.get('input[accept="image/*"]').selectFile('images/cnh.png', {force: true})
    cy.get(el.btCadastrar).click()
    cy.get('p').should('have.text', 'Recebemos o seu cadastro e em breve retornaremos o contato!')
  })
  
  Cypress.Commands.add('alertErro', () => {
    cy.contains('span', 'Informe o seu nome completo')
    cy.contains('span', 'Informe o seu melhor email')
    cy.contains('span', 'Informe o seu CPF')
    cy.contains('span', 'Informe o seu CEP')
    cy.contains('span', 'Informe um número maior que zero')
    cy.contains('span', 'Escolha pelo menos um tipo de atividade')
    cy.contains('span', 'Adcione um documento com foto (RG ou CHN)')
  })
  
  
  