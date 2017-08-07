## Sobre o Desafio

Um gene é representado como uma seqüência de comprimento `n` (onde` n 'é divisível por `4'), composto das letras` A`, `C`,` T` e `G`. É considerado estável se cada uma das quatro letras ocorra exatamente `n / 4` vezes. Por exemplo, `GACT` e` AAGTGCCT` são ambos genes estáveis.

Bear Limak é um famoso cientista da biotecnologia que se especializa em modificar o DNA do urso para torná-lo estável. Neste momento, ele está examinando um gene representado como uma string `s`. Não é necessariamente constante. Felizmente, Limak pode escolher uma substring (talvez vazia) de `s` e substituí-la por qualquer string do mesmo comprimento.

Modificar uma grande substring de genes do urso pode ser perigoso. Dado um string `s`, você pode ajudar o Limak a encontrar o comprimento da menor substring possível que ele pode substituir para fazer` s` um gene constante?

Nota: Uma substring de uma string `S` é uma subseqüência composta por zero ou mais caracteres consecutivos de` S`.

### Formato de entrada

 - A primeira linha contém um int `n` divisivel por `4`, denotando o comprimento de uma string `s`.
 - A segunda linha contém uma string `s` do comprimento` n`. Cada faz parte de um dos quatro: `A`,` C`, `T`,` G`.

### Constraints

 - `4 <= n <= 500 000`
 - `n` é divisivel por `4`

### Subtask

 - `4 <= n <= 2000` in tests worth `30%` points.

### Formato de saída

 - Em uma nova linha, imprima o comprimento mínimo da substring substituída para tornar `s` estável.

### Entrada de exemplo

```
8  
GAAATAAA
```

### Saída de exemplo
```
5
```

### Explicação
 
 - Uma solução ideal é substituir uma substring `AAATA` por `TTCCG`, resultando em `GTTCCGAA`. A substring substituída tem o comprimento `5`, então imprimimos` 5` em uma nova linha.

## Desafio 
 - from: https://www.hackerrank.com/challenges/bear-and-steady-gene
 - Inicio: 07/08/2017
 - Fim: 09/08/2017
 - Nivel: Medium

 - Vencedor: ..
 
 Participante | Pontuação
------------ | -------------

