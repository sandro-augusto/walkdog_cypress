/// <reference types="cypress" />
let el = require('../elements/homeElements').HOME
const { set, click,  } = require('../actions');

class Home {

    acessarPage() {
        cy.visit(el.url)
    }

    validaHomePage() {
        return cy.get(el.validaHome)
    }

    clicarCadastro() {
        cy.get(el.btLogin).click()
    }
}

export default new Home();