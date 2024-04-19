function waitElement(el) {
    try {
        cy.log('Aguardando o elemento ' + el + 'está visível')
        cy.get(el).and('be.visible');
        cy.log('Encontrou o elemento ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return waitElement;
}

function waitElement_index(el, index) {
    try {
        cy.log('Aguardando o elemento ' + el + 'o Index ' + index + 'está visível')
        cy.get(el).eq(index, {timeout: 10000} )
        cy.log('Encontrou o elemento ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return waitElement_index;
}

function set(el, text) {
    waitElement(el)
    try {
        cy.get(el).type(text)
        cy.log('Setou as informações no ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return set;
}

function click(el) {
    waitElement(el)
    try {
        cy.get(el).click();
        cy.log('Clicou no Elemento ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return click;
}

function click_index(el, index) {
    waitElement_index(el, index)
    try {
        cy.get(el).eq(index).click();
        cy.log('Clicou no Elemento ' + el + ' no Index' + index)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return click_index;
}

function clear(el) {
    waitElement(el)
    try {
        cy.get(el).clear();
        cy.log('Limpou no Elemento ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return clear;
}

function get_text(el) {
    waitElement(el)
    let text
    try {
        text = cy.get(el);
        cy.log('Encontrou o ' + el + ' com o texto ' + text)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return text;
}

function get_text_index(el, index) {
    waitElement_index(el, index)
    let text
    try {
        text = cy.get(el).eq(index);
        cy.log('Encontrou o ' + el + ' com o index ' + index + 'e com o texto ' + text)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return text;
}

function scrollTo(el) {
    waitElement(el)
    try {
        cy.get(el).scrollIntoView();
        cy.log('Visualizou o Elemento ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return scrollTo;
}

function visitUrl(url) {
    try {
        cy.visit(url)
        cy.log('Visitou a ' + url)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return scrollTo;
}


module.exports = {
    set, click, waitElement, waitElement_index, click_index, 
        clear, get_text, scrollTo, get_text_index, visitUrl
};