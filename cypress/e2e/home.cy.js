import home from "../support/pages/homePage"



describe('Acessar a Pagina do WalkDog e clicar no botão para acessar a pagina de Cadastro', () => {

    context('Home Page',() => {
        before(() => {
            home.acessarPage()
        });
    
        it('Validar a pagina Home', () => {
          home.validaHomePage().then((mensagem) => {
            expect(mensagem).eq('Cuidado e diversão em cada passo')
          })
        })
    
        it('Clicar botão Quero ser Dog', () => {
          home.clicarCadastro()
        })
    })
    

});

