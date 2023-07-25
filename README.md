Funcionalidade: Criar uma tela de cadastro para usuários se registrarem com as possibilidades de Passear, Cuidar e Adestrar cães

Dado que esteja na tela inicial
Quando verificar a pagina
Então será visualizado um botão com a mensagem "Quero ser Walker"

Dado que esteja na tela de Cadastro
Quando verificar as funcionalidades
Então serão visualizados os campos e botões:
Nome completo
Email
CPF
CEP
Rua
Número
Complemento
Bairro 
Cidade/UF
botão Passear
botão Cuidar
botão Adestrar
Upload
botão Cadastrar

Dado que esteja na tela de cadastro
Quando verificar o campo Nome completo
Então será visualizado obrigatório

Dado que esteja na tela de cadastro
Quando não preencher o campo Nome completo
Então será visualizado a mensagem "Informe o seu nome completo"

Dado que esteja na tela de cadastro
Quando verificar o campo E-mail
Então será visualizado obrigatório

Dado que esteja na tela de cadastro
Quando não preencher o campo E-mail
Então será visualizado a mensagem "Informe o seu melhor email"

Dado que esteja na tela de cadastro
Quando preencher o campo E-mail sem o domínio válido
Então será visualizado a mensagem "Informe um E-mail válido"

Dado que esteja na tela de cadastro
Quando verificar o campo CPF
Então será visualizado obrigatório

Dado que esteja na tela de cadastro
Quando não preencher o campo CPF
Então será visualizado a mensagem "Informe o seu CPF"

Dado que esteja na tela de cadastro
Quando  preencher o campo CPF com caractere Especial e letras
Então será visualizado a mensagem "CPF invalido"

Dado que esteja na tela de cadastro
Quando verificar o campo CEP
Então será visualizado obrigatório

Dado que esteja na tela de cadastro
Quando não preencher o campo CEP
Então será visualizado a mensagem "Informe o seu CEP"

Dado que esteja na tela de cadastro
Quando  preencher o campo CEP com caractere Especial e letras
Então será visualizado a mensagem "CEP invalido"

Dado que esteja na tela de cadastro
Quando verificar o campo Rua
Então será visualizado de acordo com o CEP pesquisado

Dado que esteja na tela de cadastro
E preencher o campo CEP com um "CEP" válido
Quando verificar o botão Buscar CEP
Então será visualizado nos campos Rua, Bairro e Cidade/UF

Dado que esteja na tela de cadastro
Quando verificar o campo Número
Então será visualizado obrigatório

Dado que esteja na tela de cadastro
Quando verificar o campo Número
Então será um select

Dado que esteja na tela de cadastro
Quando não preencher o campo Número
Então será visualizado a mensagem "Informe um número maior que zero"

Dado que esteja na tela de cadastro
Quando  preencher o campo Número com caractere Especial e letras
Então será visualizado a mensagem "Número invalido"

Dado que esteja na tela de cadastro
Quando verificar o campo Número
Então será visualizado não obrigatório

Dado que esteja na tela de cadastro
Quando verificar o campo Bairro
Então será visualizado de acordo com o CEP pesquisado

Dado que esteja na tela de cadastro
Quando verificar o campo Cidade/UF
Então será visualizado de acordo com o CEP pesquisado










