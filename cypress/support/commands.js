var el = require('../support/elements/elPage').CADASTRO
import { faker, fakerPT_BR } from '@faker-js/faker'
import 'cypress-file-upload';


 Cypress.Commands.add('home', () => {
    cy.visit('https://walkdog.vercel.app/')
    
  })

  Cypress.Commands.add('ValidaMensage', (mensage) => {
    cy.get('h1').should('be.visible').should('have.text', mensage)
  })

  Cypress.Commands.add('pagCadastro', () => {
    cy.visit('https://walkdog.vercel.app/')
    cy.ValidaMensage('Cuidado e diversão em cada passo!')
    cy.get(el.btLogin).click()
    cy.ValidaMensage('Faça seu cadastro')
  })
  
  Cypress.Commands.add('DadosPessoais', (nome, email, cpf) => {
    if (nome !== null) {
      cy.get(el.campoNome).type(nome);
    }
    if (email !== null) {
      cy.get(el.campoEmail).type(email);
    }
    if (cpf !== null) {
      cy.get(el.campoCpf).type(cpf);
    }
  })

  Cypress.Commands.add('Endereco', (cep, numero, completo) => {
    if (cep !== null) {
      cy.get(el.campoCep).type(cep);
    }
    if (numero !== null) {
      cy.get(el.campoNumero).type(numero);
    }
    if (completo !== null) {
      cy.get(el.campoComp).type(completo);
    }
    cy.get(el.btBuscarCep).click()
    
  })

  Cypress.Commands.add('uploud', () => {
    cy.get('input[accept="image/*"]').selectFile('images/cnh.png', {force: true})
    cy.get(el.btCadastrar).click()
  })

  Cypress.Commands.add('ValidaMensageCadastroOk', () => {
    cy.get('p').should('have.text', 'Recebemos o seu cadastro e em breve retornaremos o contato!')
  })


  
  Cypress.Commands.add('alertErro', (mensage) => {
    cy.contains('span', mensage).should('be.visible')
    
  })

  // cy.contains('span', 'Informe o seu nome completo')
  //   cy.contains('span', 'Informe o seu melhor email')
  //   cy.contains('span', 'Informe o seu CPF')
  //   cy.contains('span', 'Informe o seu CEP')
  //   cy.contains('span', 'Informe um número maior que zero')
  //   cy.contains('span', 'Escolha pelo menos um tipo de atividade')
  //   cy.contains('span', 'Adcione um documento com foto (RG ou CHN)')
  
  
  