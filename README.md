# notas-atletas

Este código em JavaScript foi criado para resolver um problema de competição de ginástica. A regra é simples: para calcular a nota final de cada atleta, você deve descartar a nota mais alta e a mais baixa dadas pelos jurados e depois calcular a média das três notas restantes.

O código funciona assim:

Primeiro, ele tem a lista dos atletas e suas notas.

Depois, ele cria uma cópia exata dessa lista. Isso é feito para que, ao fazer os cálculos, a lista original de notas não seja alterada. Assim, podemos mostrar as notas originais no final.

Em seguida, o código passa por cada atleta, um por um. Ele organiza as notas de cada um do maior para o menor.

Após organizar, ele remove a primeira nota (a mais alta) e a última (a mais baixa).

Feito isso, ele soma as três notas que sobraram e divide o total por três para encontrar a média.

Por fim, ele exibe no console o nome do atleta, as notas originais que ele recebeu e a média final calculada, mostrando que o programa resolveu o desafio de forma correta e limpa.
