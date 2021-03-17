# Teste de lógica Mobix

O teste consiste na resolução do passeio do cavalo. O cavalo é colocado no tabuleiro vazio e, seguindo as regras do jogo, precisa passar pelo máximo de casas que conseguir ao redor do tabuleiro, sem repetir as casas.


## Descrição e solução

O projeto foi desenvolvido em C, após 5 tentativas à mão, notei um padrão para resolver o problema<br/>
A ideia principal  é repetir sempre o padrão , seguindo somente uma ordem de verificação toda vez que muda de casa. A ordem que usei foi um L virado pra baixo, e vai girando no sentido horário. <br/>
O xadrez tem 8x8 casas, portanto fiz uma matriz 8x8 e eu zerei ela totalmente para facilitar o alocamento dos valores. <br/>
Eu solicito a posicao em que o cavalo está, pedindo separadamente a coluna e a linha, e por estar usando a linguagem C(mais fortemente tipada), portanto preciso pegar a coluna, que foi dado em letra de "a" até "h", e transformar em número, começando do indice 0 (primeiro indice de um array ou matriz é sempre 0 ).<br/>
Assim que pego a casa original do cavalo, eu aloco no indice linha x e coluna y, o valor 1, que seria a primeira posicao em que o cavalo se encontra. Em seguida, eu chamo a função "proximo" passando :a posicao original, a matriz de tabuleiro, o movimento que configurei(tanto no eixo X quanto no eixo y, lembrando que se eu pegar os mesmos indices deles, formam um tipo de movimento do cavalo por ser uma coordenada,logo, precisam trabalhar juntas, por exemplo, no eixo X -1 e Y 2, eu fui 1 casa pra esquerda e 2 pra cima), e a posicao atual inicial. A função é responsavel por localizar a proxima casa que o cavalo saltará, seguindo o padrão de movimento que escolhi (coordenada (x,y)) , e caso atenda a condicional que verifica se existe essa casa  solicitada, ele aloca a posicao com a respectiva contagem , lembrando que vai de 1 a 64, que são os passos do cavalo. Ao ser alocado com sucesso, é chamada novamente a função "proximo" passando: a proxima posicao (x,y), o tabuleiro atual, o movimento (x,y) e a posicao +1, já que estamos solicitando o proximo passo do cavalo.Ou seja, é chamada uma função dentro da outra até a posicao atingir as 64 casas da matriz.<br/>
Ao final, eu faço um comparativo, afinal a matriz está completa de 1 a 64 seguindo a ordem que o cavalo andou. Sabendo disso, so preciso localizar a linha e a coluna em ordem crescente (trajetória do cavalo) e listar 1 por 1 a linha e coluna, e por ser linguagem C , mais fortemente tipada, preciso fazer comparação da coluna para transformar os numeros em caracteres das colunas do xadrez. Logo devolvo em ordem toda a ordem que o cavalo andou. Caso queira conferir se está certo, basta colocar o seguindo comando na linha 32 do código. Colocando o código é mostrado como a matriz está preenchida, com a ordem dos passos do cavalo

`    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++)
            printf(" %3d ", Tabuleiro[i][j]);
        printf("\n");
    }   `
