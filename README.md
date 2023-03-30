## Sobre o projeto
O projeto consiste na criação de uma API com `CRUD`* , desenvolvida em TypeScript aplicando princípios de Programação Orientada a Objetos, para gerenciar veículos de uma concessionária.

Para o banco de dados foi utilizado `MongoDB` e seu framework `Mongoose`.

## Funcionalidades implementadas
* Endpoint para cadastramento de carros, acessíveis pela rota ```/cars```;
* Endpoint para listagem de veículos, acessíveis pela rota ```/cars``` e ```cars/:id```;
* Endpoint para atualização de um carro, acessível pela rota ```cars/:id```;
* Endpoint para cadastramento de motos, acessíveis pela rota ```/motorcycles```;
* Endpoint para listagem de motos, acessíveis pela rota ```/motorcycles``` e ```motorcycles/:id```;
* Endpoint para atualização de um carro, acessível pela rota ```motorcycles/:id```;
* Testes para as camadas services de carros e motos.

## Tecnologias utilizadas
* Node.Js;
* TypeScript;
* MongoDB;
* Mongoose;
* Sinon;
* Chai.

## Arquivos desenvolvidos
Todos os arquivos que foram desenvolvidos podem ser encontrados na seguinte estrutura. Os demais arquivos não foram necessariamente desenvolvidos por mim, podendo ser arquivos de configurações e instalações de terceiros.

```
├── src
│   ├── Controllers
│   │   ├── carController.ts
│   │   └── motorcycleController.ts
│   ├── Domains
│   │   ├── Car.ts
│   │   ├── Motorcycle.ts
│   │   └── Vehicle.ts
│   ├── Interfaces
│   │   ├── ICar.ts
│   │   ├── IMotorcycle.ts
│   │   └── IVehicle.ts
│   ├── Middlewares
│   │   └── ErrorHandler.ts
│   ├── Models
│   │   ├── AbstractODM.ts
│   │   ├── CarODM.ts
│   │   ├── Connection.ts
│   │   └── MotorcycleODM.ts
│   ├── Routes
│   │   ├── carRoute.ts
│   │   ├── motorcycleRoute.ts
│   │   └── routes.ts
│   ├── Services
│   │   ├── carService.ts
│   │   └── motorcycleService.ts
├── tests
│   ├── Mocks
│   │   ├── CarMock.ts
│   │   └── MotoMock.ts
│   ├──  unit
│   │   ├── Services
│   │   │ ├── carService.test.ts
│   │   │ └── motoService.test.ts

```

*Funcionalidade de excluir carros e motos com base em seu ID não implementada.
