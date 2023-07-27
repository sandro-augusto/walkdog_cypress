var el = require('../support/elements/elPage').CADASTRO
import 'cypress-file-upload';
import { faker, fakerPT_BR } from '@faker-js/faker'

describe('Realização de cadastros e validações de mensagens de erro', () => {
  
  context('home', () => {
    it('Home', () => {
      cy.home()
      cy.ValidaMensage('Cuidado e diversão em cada passo!')
    })
    it('Validando pagina de cadastro', () => {
      cy.pagCadastro()
    })
  });

  context('cadastro', () => {
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
  })

  context('Validando mensagens de erro', () => {
    it('Validando mensagem de erro NOME COMPLETO', () => {
      cy.pagCadastro()
      cy.get(el.campoEmail).type(faker.internet.exampleEmail())
      cy.get(el.campoCpf).type(faker.random.numeric(11))
      cy.Endereco(50760170, faker.random.numeric(4), 'casa')
      cy.get(el.btPassear).click()
      cy.uploud()
      cy.alertErro('Informe o seu nome completo')
    })
  
    it('Validando mensagem de erro EMAIL', () => {
      cy.pagCadastro()
      cy.get(el.campoNome).type(faker.person.fullName())
      cy.get(el.campoCpf).type(faker.random.numeric(11))
      cy.Endereco(50760170, faker.random.numeric(4), 'casa')
      cy.get(el.btPassear).click()
      cy.uploud()
      cy.alertErro('Informe o seu melhor email')
    })
    it('Validando mensagem de erro CPF', () => {
      cy.pagCadastro()
      cy.get(el.campoNome).type(faker.person.fullName())
      cy.get(el.campoEmail).type(faker.internet.exampleEmail())
      cy.Endereco(50760170, faker.random.numeric(4), 'casa')
      cy.get(el.btPassear).click()
      cy.uploud()
      cy.alertErro('Informe o seu CPF')
    })
    it('Validando mensagem de erro CEP', () => {
      cy.pagCadastro()
      cy.DadosPessoais(faker.person.fullName(), faker.internet.exampleEmail(), faker.random.numeric(11))
      cy.get(el.campoNumero).type(faker.random.numeric(4))
      cy.get(el.campoComp).type('Casa')
      cy.get(el.btPassear).click()
      cy.uploud()
      cy.alertErro('Informe o seu CEP')
    })
    it('Validando mensagem de erro Número', () => {
      cy.pagCadastro()
      cy.DadosPessoais(faker.person.fullName(), faker.internet.exampleEmail(), faker.random.numeric(11))
      cy.get(el.campoCep).type(50760170)
      cy.get(el.btBuscarCep)
      cy.get(el.campoComp).type('Casa')
      cy.get(el.btPassear).click()
      cy.uploud()
      cy.alertErro('Informe um número maior que zero')
    })
    it('Validando mensagem de erro Tipo de Atividade', () => {
      cy.pagCadastro()
      cy.DadosPessoais(faker.person.fullName(), faker.internet.exampleEmail(), faker.random.numeric(11))
      cy.Endereco(50760170, faker.random.numeric(4), 'casa')
      cy.uploud()
      cy.alertErro('Escolha pelo menos um tipo de atividade')
    })
    it('Validando mensagem de erro do Upload', () => {
      cy.pagCadastro()
      cy.DadosPessoais(faker.person.fullName(), faker.internet.exampleEmail(), faker.random.numeric(11))
      cy.Endereco(50760170, faker.random.numeric(4), 'casa')
      cy.get(el.btPassear).click()
      cy.get(el.btCadastrar).click()
      cy.alertErro('Adcione um documento com foto (RG ou CHN)')
    })
  })

  })





  
  
  
  


    



