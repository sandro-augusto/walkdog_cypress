# AUTOMAÇÃO FRONT-END - WALKDOG

**PROJETO CYPRESS DE CADASTRO PARA PASSEAR E ADESTRAR ANIMAIS DE ESTIMAÇÃO**

## Instalação do Ambiente
* Instalar a IDE que dejesar, recomendado o Visual Studio Code, onde serão realizadas as execuções

* NodeJs com a versão 18.16.1

* Java com a versão 1.8.0_371

## Comando para instalar as depências e plugin do projeto:
```sh default
* yarn install
```
**ou**
```sh default
* npm install
```
## Comando para abrir o Cypress:
```sh default
* yarn cypress open
```
**ou**
```sh default
* npx cypress open
```
## Comando pra rodar o projeto com as TAG'S que estão em Scripts dentro da pasta "/package.json":
```sh default
* yarn run (tag)
```
**ou**
```sh default
* npx cypress (tag)
```

**SCRIPTS:**
* **"run_allure" - TAG pra rodar em headless com o Yarn e o relatório Allure**
* **"run_allure_npm" - TAG pra rodar em headless com o NPM e o relatório Allure** 
* **"yallure_serve" - Abrir o servidor do relatório Allure com o Yarn**
* **"nallure_serve" - Abrir o servidor do relatório Allure com o NPM**
* **"test" - Rodar o projeto em headless e abrir o relatório em HTML**
