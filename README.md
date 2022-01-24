**RF** => Requisitos funcionais

**RNF** => Requisitos não funcionais 

**RN** => Regra de negócio

# Cadastro de Carro

**RF** <br>
Deve ser possível cadastrar um novo carro.<br>

**RN** <br>
Não deve ser possível cadastrar um carro com uma placa já existente.<br>
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

**RN** <br>
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.<br>
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.<br>


# Cadastro de imagens do carro

**RF** <br>
Deve ser possível cadastrar a imagem do carro.<br>

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
O usuário deve está logado na aplicação.<br>
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.<br>

# Devolução de carro

**RF**<br>
Deve ser possível realizar a devolução de um carro<br>

**RN**<br>
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado a diária completa.<br>
AO realizar a devolução, o carro deverá ser liberado para outro aluguel.<br>
AO realizar a devolução, o usuário deverá ser liberado para outro aluguel.<br>
Ao realizar a devolução, deverá ser calculado o total do aluguel.<br>
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.<br>
Caso haja multa, deverá ser somado ao total do aluguel.<br>