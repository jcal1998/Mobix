const proximo = ( x, y, Tabuleiro, movimentoX, movimentoY, posicao) => {
    console.log(x)
    console.log(y)
    console.log(posicao)
    console.log(Tabuleiro)
    console.log(movimentoX[2])
    console.log(movimentoY[2])
    console.log(posicao)
    let i, proxx, proxy;
    if (posicao == 64) return 1;
    for (i = 0; i < 8; i++) {
        proxx = x + movimentoX[i];
        proxy = y + movimentoY[i];
        if ((proxx >= 0) && (proxx < 8) && (proxy >= 0) && (proxy < 8) && (Tabuleiro[proxx][proxy] == 0)) {
            Tabuleiro[proxx][proxy] = posicao + 1;
            proximo(proxx, proxy, Tabuleiro, movimentoX, movimentoY , posicao+1);
        }
    }
    return 0;
}
const main = () => {
    const movimentoX = [-1,-2, -2, -1, 1, 2, 2, 1], movimentoY = [2, 1, -1, -2,-2,-1, 1, 2];
    let  i, j, x , y,  Tabuleiro = [] , Tabuleiro2 = [], posicao=1, cont=1, cont2=1;
    let posiinicial = 'b4'
    x=posiinicial[1] - 1;
    if(posiinicial[0] == 'a') y=0;if(posiinicial[0] == 'b') y=1;if(posiinicial[0] == 'c') y=2;if(posiinicial[0] == 'd') y=3;if(posiinicial[0] == 'e') y=4;if(posiinicial[0] == 'f') y=5;if(posiinicial[0] == 'g') y=6;if(posiinicial[0] == 'h') y=7;


    for (i = 0; i < 8; i++){
        Tabuleiro[i]=[];
        Tabuleiro2[i]=[];
        for (j = 0; j < 8; j++){
            Tabuleiro[i][j] = 0;
            Tabuleiro2[i][j] = 0;
        }
    }
    

    Tabuleiro[x][y] = 1;
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) 
            process.stdout.write(Tabuleiro[i][j] + " ");
        console.log(""); 
    }
    console.log(x)
    console.log(y)
    console.log(posiinicial)
    console.log(Tabuleiro)
    console.log(movimentoX[2])
    console.log(movimentoY[2])
    console.log(posicao)

    proximo(x, y, Tabuleiro, movimentoX, movimentoY , posicao);



    while(cont2<65){
        for (i = 0; i < 8; i++){
            for (j = 0; j < 8; j++){
                if(Tabuleiro[i][j]==cont2){
                    Tabuleiro2[i][j]='C';
                    setTimeout(() => {
                        for (i = 0; i < 8; i++) {
                            for (j = 0; j < 8; j++) 
                                console.log(` ${Tabuleiro2[i][j]} `); 
                            console.log("\n"); 
                        }
                    }, 1500);
                    Tabuleiro2[i][j]='X';
                    cont2++;
                }
            }
        }
    }


    return 0;
}
main();