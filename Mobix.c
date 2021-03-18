#include<stdio.h>
int proximo(int x, int y, int Tabuleiro[8][8], int movimentoX[8], int movimentoY[8], int posicao) {
    int i, proxx, proxy;
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
int main(){
    int  i, j, x , y,  movimentoX[8] = { 2, 1, -1, -2,-2,-1, 1, 2}, movimentoY[8] = {-1,-2, -2, -1, 1, 2, 2, 1}, Tabuleiro[8][8]={0}, posicao=1, cont=1;
    char charY;
    printf("Qual a coluna inicial da cavalo (a-h): ");
    scanf("%c", &charY  );
    printf("Qual a linha inicial do cavalo (1-8): ");
    scanf("%d", &x);
    x--;
    if(charY == 'a') y=0;if(charY == 'b') y=1;if(charY == 'c') y=2;if(charY == 'd') y=3;if(charY == 'e') y=4;if(charY == 'f') y=5;if(charY == 'g') y=6;if(charY == 'h') y=7;

    Tabuleiro[x][y] = 1;

    proximo(x, y, Tabuleiro, movimentoX, movimentoY , posicao);

    while(cont<65){
        for (i = 0; i < 8; i++){
            for (j = 0; j < 8; j++){
                if(Tabuleiro[i][j]==cont){
                    x=i+1;
                    if(j==0) charY='a';if(j==1) charY='b';if(j==2) charY='c';if(j==3) charY='d';if(j==4) charY='e';if(j==5) charY='f';if(j==6) charY='g';if(j==7) charY='h';
                    printf("%c%d\n",charY,x);
                    cont++;
                }
            }
        }
    }
    return 0;
}
