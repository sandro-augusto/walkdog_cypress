import cadastro from "../support/pages/cadastroPage"
import home from "../support/pages/homePage"
const { randomName, randomEmail, randomNumeric, upload } = require('../support/utils')


describe('Realização de cadastros e validações de mensagens de erro', () => {
  beforeEach(() => {
    home.acessarPage()
    home.validaHomePage()
    home.clicarCadastro()
  });

  context('Cadastro', () => {
    it('Cadastrando clientes para Cuidar dos cães', () => {
      cadastro.validaCadastroPage().then((mensagem) => {
          expect(mensagem.text()).eq('Voltar para home')
      })
      cadastro.preencheDadosPessoais(randomName(), randomEmail(), randomNumeric(11))
      cadastro.preencheEndereco(50760170, randomNumeric(4), 'casa')
      cadastro.clickCep()
      cadastro.opcaoCuidar()
      upload()
      cadastro.clickCadastrar()
      cadastro.validaCadastro().then((mensagem) => {
        cy.screenshot()
        expect(mensagem.text()).eq('Recebemos o seu cadastro e em breve retornaremos o contato.')
      })
    })

    it('Cadastrando clientes para Adestrar os cães', () => {
      cadastro.validaCadastroPage().then((mensagem) => {
        expect(mensagem.text()).eq('Voltar para home')
      })
      cadastro.preencheDadosPessoais(randomName(), randomEmail(), randomNumeric(11))
      cadastro.preencheEndereco(50760170, randomNumeric(4), 'casa')
      cadastro.clickCep()
      cadastro.opcaoAdestrar()
      upload()
      cadastro.clickCadastrar()
      cadastro.validaCadastro().then((mensagem) => {
        cy.screenshot()
        expect(mensagem.text()).eq('Recebemos o seu cadastro e em breve retornaremos o contato.')
      })
      })
  })

  context('Validando mensagens de erro', () => {
    it('Validando mensagem de erro NOME COMPLETO', () => {
      cadastro.validaCadastroPage().then((mensagem) => {
        expect(mensagem.text()).eq('Voltar para home')
      })
      cadastro.preencheDadosPessoais(null, randomEmail(), randomNumeric(11))
      cadastro.preencheEndereco(50760170, randomNumeric(4), 'casa')
      cadastro.clickCep()
      cadastro.opcaoAdestrar()
      upload()
      cadastro.clickCadastrar()
      cadastro.validaMessagemErro().then((mensagem) => {
        cy.screenshot()
        expect(mensagem.text()).eq('Informe o seu nome completo')
      })
    })
  
    it('Validando mensagem de erro EMAIL', () => {
      cadastro.validaCadastroPage().then((mensagem) => {
        expect(mensagem.text()).eq('Voltar para home')
      })
      cadastro.preencheDadosPessoais(randomName(), null, randomNumeric(11))
      cadastro.preencheEndereco(50760170, randomNumeric(4), 'casa')
      cadastro.clickCep()
      cadastro.opcaoAdestrar()
      upload()
      cadastro.clickCadastrar()
      cadastro.validaMessagemErro().then((mensagem) => {
        cy.screenshot()
        expect(mensagem.text()).eq('Informe o seu melhor email')
      })
    })
    it('Validando mensagem de erro CPF', () => {
      cadastro.validaCadastroPage().then((mensagem) => {
        expect(mensagem.text()).eq('Voltar para home')
      })
      cadastro.preencheDadosPessoais(randomName(), randomEmail(), null)
      cadastro.preencheEndereco(50760170, randomNumeric(4), 'casa')
      cadastro.clickCep()
      cadastro.opcaoAdestrar()
      upload()
      cadastro.clickCadastrar()
      cadastro.validaMessagemErro().then((mensagem) => {
        cy.screenshot()
        expect(mensagem.text()).eq('Informe o seu CPF')
      })
    })

    it('Validando mensagem de erro CPF inválido', () => {
      cadastro.validaCadastroPage().then((mensagem) => {
        expect(mensagem.text()).eq('Voltar para home')
      })
      cadastro.preencheDadosPessoais(randomName(), randomEmail(), '0000000000000000000000000000000000000000000000')
      cadastro.preencheEndereco(50760170, randomNumeric(4), 'casa')
      cadastro.clickCep()
      cadastro.opcaoAdestrar()
      upload()
      cadastro.clickCadastrar()
      cadastro.validaMessagemErro().then((mensagem) => {
        cy.screenshot()
        expect(mensagem.text()).eq('CPF inválido')
      })
    })

    it('Validando mensagem de erro CEP', () => {
      cadastro.validaCadastroPage().then((mensagem) => {
        expect(mensagem.text()).eq('Voltar para home')
      })
      cadastro.preencheDadosPessoais(randomName(), randomEmail(), randomNumeric(11))
      cadastro.preencheEndereco(null, randomNumeric(4), 'casa')
      cadastro.clickCep()
      cadastro.opcaoAdestrar()
      upload()
      cadastro.clickCadastrar()
      cadastro.validaMessagemErro().then((mensagem) => {
        cy.screenshot()
        expect(mensagem.text()).eq('Informe o seu CEP')
      })
    })
    it('Validando mensagem de erro Número', () => {
      cadastro.validaCadastroPage().then((mensagem) => {
        expect(mensagem.text()).eq('Voltar para home')
      })
      cadastro.preencheDadosPessoais(randomName(), randomEmail(), randomNumeric(11))
      cadastro.preencheEndereco(50760170, null, 'casa')
      cadastro.clickCep()
      cadastro.opcaoAdestrar()
      upload()
      cadastro.clickCadastrar()
      cadastro.validaMessagemErro().then((mensagem) => {
        cy.screenshot()
        expect(mensagem.text()).eq('Informe um número maior que zero')
      })
    })
    // it.only('Validando mensagem de erro Tipo de Atividade', () => {
    //   cy.pagCadastro()
    //   cy.DadosPessoais(faker.person.fullName(), faker.internet.exampleEmail(), faker.random.numeric(11))
    //   cy.Endereco(50760170, faker.random.numeric(4), 'casa')
    //   cy.uploud()
    //   cy.alertErro('Escolha pelo menos um tipo de atividade')
    // })
    it('Validando mensagem de erro do Upload', () => {
      cadastro.validaCadastroPage().then((mensagem) => {
        expect(mensagem.text()).eq('Voltar para home')
      })
      cadastro.preencheDadosPessoais(randomName(), randomEmail(), randomNumeric(11))
      cadastro.preencheEndereco(50760170, randomNumeric(4), 'casa')
      cadastro.clickCep()
      cadastro.opcaoAdestrar()
      cadastro.clickCadastrar()
      cadastro.validaMessagemErro().then((mensagem) => {
        cy.screenshot()
        expect(mensagem.text()).eq('Adcione um documento com foto (RG ou CHN)')
      })
    })
  })
  })

