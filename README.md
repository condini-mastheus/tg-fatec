# TG - FATEC 2019

Este aplicativo tem o propósito de fazer permutas de jogos de video game, através de uma interface semalhante a do Tinder.

## Estrutura de arquivos

```bash
tg-fatec
├── src/
│   ├── config/
│   │   └── reactotron.js
│   ├── screens/
│   │    └── Main/
│   │       └── index.js
│   ├── services/
│   │   └── api.js
│   ├── store/
│   │    ├── ducks/
│   │    │  └── index.js
│   │    ├── sagas/
│   │    │  └── index.js
│   │    └── index.js
│   ├── routes.js
│   └── index.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── index.js
├── jsconfig.js
├── LICENSE
├── flowconfig.json
├── buckconfig.json
├── .gitattributes
├── .watchmanconfig
├── app.json
├── package.json
└── README.md
```

`src/` - Contém todo o código fonte

`src/config` - Contém todo os arquivos configuração para libs externas

`src/screens` - Contém todas as telas do aplicativos

`src/services` - Contém a parte de gestão de serviços, eg. _navegação e api_

`src/components` - Contém todos os componentes que são _reutilizáveis_ do aplicativo

`src/assets` - Contém todos os recursos da aplicação, eg. _imagems, fontes, svgs e etc_

`src/store` - Contém a parte do estado da aplicação e fluxo de informações

`src/store/ducks` - Contém os reducers

`src/store/sagas` - Contém as sagas

`src/routes.js` - Responsável pela criação do tipo de navegação do app.

`src/index.js` - Inicializa o app

`.editorconfig` - Configurações universais para qualquer editor

`.eslintrc.json` - Configurações de regras de códigos, formatação e espaçamento

`.gitignore` - Arquivo de configuração git

`babel.config.js` - Arquivo de configuração do babel, intepretador de js

`index.js` - Faz a chamada do aplicativo

`jsconfig.js` - Arquivo de configuração para Vscode aceitar caminhos relativos

`LICENSE` - Licença

`flowconfig.json` - Arquivo de configuração RN

`buckconfig.json` - Arquivo de configuração RN

`.gitattributes` - Arquivo de configuração git

`.watchmanconfig` - Arquivo de configuração RN

`app.json` - Arquivo de configuração do app

`package.json` - Arquivo de configuração npm/yarn

`README.md` - Este arquivo
