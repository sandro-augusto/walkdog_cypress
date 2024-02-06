// var el = require('./elements/homeElements').CADASTRO
// import 'cypress-file-upload';


//  Cypress.Commands.add('home', () => {
//     cy.visit(el.url)
    
//   })

//   Cypress.Commands.add('ValidaMensage', () => {
//     cy.get(el.ValidaMensage)
//   })

//   Cypress.Commands.add('pagCadastro', () => {
//     cy.ValidaMensage().should('be.visible').should('have.text', 'Cuidado e diversão em cada passo')
//     cy.get(el.btLogin).click()
//   })
  
//   Cypress.Commands.add('DadosPessoais', (nome, email, cpf) => {
//     if (nome !== null) {
//       cy.get(el.campoNome).type(nome);
//     }
//     if (email !== null) {
//       cy.get(el.campoEmail).type(email);
//     }
//     if (cpf !== null) {
//       cy.get(el.campoCpf).type(cpf);
//     }
//   })

//   Cypress.Commands.add('Endereco', (cep, numero, completo) => {
//     if (cep !== null) {
//       cy.get(el.campoCep).type(cep);
//     }
//     if (numero !== null) {
//       cy.get(el.campoNumero).type(numero);
//     }
//     if (completo !== null) {
//       cy.get(el.campoComp).type(completo);
//     }
//     cy.get(el.btBuscarCep).click()
    
//   })

//   Cypress.Commands.add('uploud', () => {
//     cy.get('input[accept="image/*"]').selectFile('images/cnh.png', {force: true})
//     cy.get(el.btCadastrar).click()
//   })

//   Cypress.Commands.add('ValidaMensageCadastroOk', () => {
//     cy.get(el.messageSucesso).should('have.text', 'Recebemos o seu cadastro e em breve retornaremos o contato.')
//   })

//   Cypress.Commands.add('alertErro', (mensage) => {
//     cy.contains('span', mensage).should('be.visible')
    
//   })
  
  