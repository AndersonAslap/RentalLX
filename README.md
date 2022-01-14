**RF** => Requisitos funcionais

**RNF** => Requisitos não funcionais 

**RN** => Regra de negócio

# Cadastro de Carro

**RF** <br>
<<<<<<< HEAD
Deve ser possível cadastrar um novo carro.<br>
Deve ser possível listar todas as categorias.<br>
=======
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.
>>>>>>> e92a26fbd27d9a55ab0d689a6cbcc2318038f0de

**RN** <br>
Não deve ser possível cadastrar um carro com uma placa já existente.<br>
Não deve ser possível alterar a placa de um carro já cadastrado.<br>
O carro deve ser cadastrado , por padçao, com disponibilidade.<br>
O usuário responsável pelo cadastro deve ser um usuário administrador.<br>


# Listagem de Carro

**RF** <br>
Deve ser possível listar todos carros disponíveis.<br>
deve ser possível listar todos os carros disponíveis pelo nome da categoria.<br>
deve ser possível listar todos os carros disponíveis pelo nome da marca.<br>
deve ser possível listar todos os carros disponíveis pelo nome do carro.<br>

**RN** <br>
O usuário não precisa estar logado no sistema.<br>


# Cadastro de especificação no carro

**RF** <br>
Deve ser possível cadastrar uma especificação para um carro.<br>
Deve ser possível listar todas as especificações.<br>
Deve ser possível listar todos os carros.<br>

**RN** <br>
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.<br>
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.<br>


# Cadastro de imagens do carro

**RF** <br>
Deve ser possível cadastrar a imagem do carro.<br>
Deve ser possível listar todos os carros.<br>

**RNF** <br>
Ultilizar o multer para upload dos arquivos.<br>

**RN** <br>
O usuário poderá cadastrar mais de uma imagem para o mesmo carro.<br>
O usuário responsável pelo cadastro deve ser um usuário administrador.<br>


# Aluguel de carro

**RF** <br>
Deve ser possível cadastrar um aluguel.<br>

**RNF** <br>
Ultilizar o multer para upload dos arquivos.<br>


**RN** <br>
O aluguel deve ter duração mínima de 24 horas.<br>
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.<br>
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.<br>

