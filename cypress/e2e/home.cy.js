var el = require('../support/elements/elPage').CADASTRO
import 'cypress-file-upload';
import { faker, fakerPT_BR } from '@faker-js/faker'

describe('Acessando a Pagina Home', () => {
  it('Home', () => {
    cy.home()
    cy.ValidaMensage('Cuidado e diversão em cada passo!')
  })
  it('Validando pagina de cadastro', () => {
    cy.pagCadastro()
  })
  it('Cadastrando clientes para Passear com os cães', () => {
    cy.pagCadastro()
    cy.DadosPessoais(faker.person.fullName(), faker.internet.exampleEmail(), faker.random.numeric(11))
    cy.Endereco(50760170, faker.random.numeric(4), 'casa')
    cy.get(el.btPassear).click()
    cy.uploud()
    cy.ValidaMensageCadastroOk()
  })
  it('Cadastrando clientes para Cuidar dos cães', () => {
    cy.pagCadastro()
    cy.DadosPessoais(faker.person.fullName(), faker.internet.exampleEmail(), faker.random.numeric(11))
    cy.Endereco(50760170, faker.random.numeric(4), 'casa')
    cy.get(el.btCuidar).click()
    cy.uploud()
    cy.ValidaMensageCadastroOk()
  })
  it('Cadastrando clientes para Adestrar os cães', () => {
    cy.pagCadastro()
    cy.DadosPessoais(faker.person.fullName(), faker.internet.exampleEmail(), faker.random.numeric(11))
    cy.Endereco(50760170, faker.random.numeric(4), 'casa')
    cy.get(el.btAdestrar).click()
    cy.uploud()
    cy.ValidaMensageCadastroOk()
  })
  
  it('Validando mensagem de erro NOME COMPLETO', () => {
    cy.pagCadastro()
    cy.get(el.campoEmail).type(faker.internet.exampleEmail())
    cy.get(el.campoCpf).type(faker.random.numeric(11))
    cy.Endereco(50760170, faker.random.numeric(4), 'casa')
    cy.get(el.btPassear).click()
    cy.uploud()
    cy.alertErro('Informe o seu nome completo')
  })

  it.only('Validando mensagem de erro EMAIL', () => {
    cy.pagCadastro()
    cy.get(el.campoNome).type(faker.person.fullName())
    cy.get(el.campoCpf).type(faker.random.numeric(11))
    cy.Endereco(50760170, faker.random.numeric(4), 'casa')
    cy.get(el.btPassear).click()
    cy.uploud()
    cy.alertErro('Informe o seu melhor email')
  })
})


    



