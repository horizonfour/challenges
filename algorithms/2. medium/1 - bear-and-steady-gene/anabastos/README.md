## Logica

#### Logica Geral
Usar pequenas funções puras e usando Ramda.js fazer uma *Composição de função*.
Todas as funções serão testadas pelo Jest

*Compose* funciona com a combinação(basicamente chamar uma função dentro da outra) de funções simples com o intuito de chegar em um resultado complexo.
O que o ramda faz é tornar mais legível o que seria:

`f(g(x))`

para:

`f, g`

[Neste artigo o grandissimo Eric Elliot explica sobre *Function Composition* e como implementa-lo](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)
[Artigo do wikipedia sobre Function Composition](https://en.wikipedia.org/wiki/Function_composition_(computer_science))

Chamar funções dentro de funções cai no conceito de *High order function* ou *função de primeira classe*, pratica muito comum no paradigma funcional.

Futuramente no javascript vai ser possivel encadear essas funções de forma simples por meio do pipeline operator. [Segue a especificação](https://github.com/tc39/proposal-pipeline-operator)

#### Passo-a-passo
- Criar função checar quão balanceado está com a soma das letras.
- Checar o balanceamento, se estiver balanceado(letras divisiveis por 4) a substring é 0.
- Se não estiver buscar de qual em qual index seria necessario apartir de outra função.
- Pegar o tamanho dessa substring.

### Configuração

`yarn`

ou

`npm i`

### Testes

`yarn test`

ou

`npm test`
