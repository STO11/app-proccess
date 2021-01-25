# Exemplo Aplicativo de Processos (React Native & Typescript)
> Aplicativo para consulta de processos judiciais.

> Algumas considerações:

> Não foi utilizado nenhum gerenciador de estados, apenas hooks.

> Algumas funcionalidades podem ser a titulo de exemplificação.


![](ios.png) ![](android.jpg)

## Instalação

Windows OS X & Linux:

```sh
git clone https://github.com/STO11/app-proccess.git
```

```sh
cd app-proccess
```

Instale os pacotes do node utilizando:

```sh
yarn
```
Ou
```sh
npm i
```

> Para IOS/IPHONE utilize
```sh
cd ios/

```
```sh
pod install
```

## Configurar variaveis de ambiente

Na raiz do projeto abra e copie o arquivo `.env.example` criando outro arquivo `.env`

Setando as variaveis  `API_URL` (Seu endpoint, apenas a base URL principal) e `API_TOKEN` (chave no header x-frontend-test)

Após isso utilize os comandos para rodar sua aplicação:

Para ANDROID:
```sh
npx react-native run-android
```

Para IOS:
```sh
npx react-native run-ios
```
## Autenticação no aplicativo

Para logar no app utilize usuário `candidato_mobile@email.com.br`  e senha `123456`
