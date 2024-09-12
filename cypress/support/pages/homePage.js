/// <reference types="cypress" />
let el = require('../elements/homeElements').HOME
const { click, get_text, visitUrl } = require('../actions');

class Home {

    acessarPage() {
        visitUrl(el.url)
    }

    validaHomePage() {
        return get_text(el.validaHome)
    }

    clicarCadastro() {
        cy.screenshot()
        click(el.btLogin) 
    }
}

export default new Home();