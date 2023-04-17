## API para verificação de senha

### Esta API REST permite você fazer verificações na senha a partir das regras que escolher e colocar em sua requisição HTTP. 

<p align="center">
 <a href="#Funcionalidades">Funcionalidades</a> •
 <a href="#Pré-requisitos">Pré-requisitos</a> • 
 <a href="#Rodando">Rodando</a> • 
 <a href="#Tecnologias">Tecnologias</a> • 
 <a href="#Testes">Testes</a> •
 <a href="#Autor">Autor</a>
</p>

<h4 align="center"> 
	API para Senhas 🚀 Concluído
</h4>

### Funcionalidades

- [x] Regras de verificação de senha (x é o valor de 'value' na requisição feita):
    - [x] minSize:  tem pelo menos x caracteres;
    - [x] minUppercase: tem pelo menos x caracteres maiúsculos;
    - [x] minLowercase: tem pelo menos x caracteres minúsculos;
    - [x] minDigit: tem pelo menos x dígitos (0-9);
    - [x] minSpecialChars: : tem pelo menos x caracteres especiais ( Os caracteres especiais são os caracteres da seguinte string: "!@#$%^&*()-+\/{}[]" );
    - [x] noRepeted: não tenha nenhum caractere repetido em sequência ( ou seja, "aab" viola esta condição, mas "aba" não).

### Pré-requisitos 

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando

A API é construída com o **Npm** (que é distribuído pelo [Node.js](https://nodejs.org/en/), portanto, ao instalar o Node.js, como pedido anteriormente em <a href="#Pré-requisitos">Pré-requisitos</a>, você já terá essa funcionalidade).
#### Clone este repositório caso for utilizar o GitHub

```
git clone <https://github.com/Guisanita/API-VerificacaoSenhaStudioSol>
```

#### Acesse a pasta do projeto no terminal/cmd

```
cd API-VerificacaoSenhaStudioSol
```

#### Instale as dependências

```
npm install
```

#### Execute a aplicação em modo de desenvolvimento

```
npm run dev
```

#### O servidor inciará na porta:8080- acesse:

```
<http://localhost:8080> 
```

### Tecnologias

[Node.js](https://nodejs.org/en/)

### Testes
Para fazer os testes você pode utilizar o insomnia:
[Insomnia](/test/Insomnia-All_2023-02-06.json)

![](/assets/Captura%20de%20tela%202023-02-06%20163003.png)

A requisição HTTP deve ser feita no body e no formato Json, na única rota da API que é **/verify** Utilizando o seguinte formato:

```
{
"password": "TesteSenhaForte!123&",
"rules": [
{"rule": "minSize","value": 8},
{"rule": "minSpecialChars","value": 2},
{"rule": "noRepeted","value": 0},
{"rule": "minDigit","value": 4}
]
}
```

Onde em "password" você insere a senha que quer testar e em "rules" você coloca um array de objetos com as regras que pretende aplicar e qual a quantidade mínima de caracteres que deve seguir essa regra. 

**Obs.** Escreva o nome da regra exatamente como aqui no documento:

"minSize"

"minUppercase"

"minLowercase"

"minDigit"

"minSpecialChars"

"noRepeted"

### Autor

| <img src='/assets/GuilhermeSanita.jpg' width='180px'/> | 
| :----------------------------------------------: |
| [Guilherme Sanitá](https://github.com/Guisanita) |

<a href="https://www.linkedin.com/in/guilherme-sanit%C3%A1-0841bb128/" target='_blank'> ![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) </a>






