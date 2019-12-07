//Cenario
	//Tela
var largura = 800, altura = 600,
	chaoX = 0, chaoY = altura*0.90;
	//Elementos
var fundo, solo, grass, luar, clouds, clouds2, nuv, nuvInt, nuvExc, life, buraco, tronco, tronco2, tronco3, ini;
	//Posições Fixas
var luarX = largura*0.60;;
var cloudsX = 0;
var clouds2X = 0;
	//Vetores de Posição
var nuvX = [], 
	nuvY = [];
var nuvIntX = [];
	nuvIntY = [];
var nuvExcX = 200;
var lifeX = 520;
var soloGrassX = [];
	//Posições Elementos Vetores
		//Nuvens Fixas
		var qtdNuv = 28;
		var qtdNuvInt = 9;
			//Primeira Leva
			for(var i=0;i<5;i++){
				nuvX[i] = 440 + 40*i;
				nuvY[i] = 320;
			}
				nuvX[5] = 520;
				nuvY[5] = 150;
			for(var i=0;i<2;i++){
				nuvIntX[i] = 520;
				nuvIntY[i] = 150 + 170*i;
			}
			//Segunda Leva
			for(var i=6;i<9;i++){
				nuvX[i] = 2500 + 40*i;
				nuvY[i] = 320;
			}
			nuvX[9] = nuvX[i] = 2500 + 40*21;
			nuvY[i] = 320;
			for(var i=2;i<3;i++){
				nuvIntX[i] = 2500+40*(i+5);
				nuvIntY[i] = 320;
			}
			//Terceira Leva
			for(var i=10;i<17;i++){
				nuvX[i] = 2500 + 40*i;
				nuvY[i] = 150;
			}
			nuvX[17] = 2500 + 40*22;
			nuvX[18] = 2500 + 40*20;
			nuvX[19] = 2500 + 40*21;
			nuvY[17] = 150;
			nuvY[18] = 150;
			nuvY[19] = 150;

			nuvIntX[3] = 2500 + 40*22;
			nuvIntY[3] = 150;
			//Quarta Leva
			for(var i=20, j=7;i<23;i++, j+=2){
				nuvX[i] = 2500 + 40*(i+j);
				nuvY[i] = 320;
			}
			nuvX[23] = 2500 + 40*(30);
			nuvY[23] = 150;
			for(var i=3, j=7;i<6;i++,j+=2){
				nuvIntX[i] = 2500+40*(i+17+j);
				nuvIntY[i] = 320;
			}
			nuvIntX[6] = 2500 + 40*(30);
			nuvIntY[6] = 150;
			//Quinta Leva
			for(var i=24;i<28;i++){
				nuvX[i] = 2500 + 40*(i+55);
				nuvY[i] = 320;
			}
			nuvIntX[8] = 2500 + 40*(81);
			nuvIntY[8] = 320;
//Chao
for(var i=0;i<11;i++){
	soloGrassX[i] = 800*i;
}

//PNGs
function preload() {
	menu = loadImage('resources/menu.png');
	btIniciar = loadImage('resources/btIniciar.png');
	btIniciarAces = loadImage('resources/btIniciarAces.png');
	btCred = loadImage('resources/btCred.png');
	btCredAces = loadImage('resources/btCredAces.png');

	fases = loadImage('resources/fases.png');
	fase1 = loadImage('resources/fase1.png');
	fase1Aces = loadImage('resources/fase1Aces.png');
	fase2 = loadImage('resources/fase2.png');
	fase2Aces = loadImage('resources/fase2Aces.png');
	fase3 = loadImage('resources/fase3.png');
	fase3Aces = loadImage('resources/fase3Aces.png');
	fase4 = loadImage('resources/fase4.png');
	fase4Aces = loadImage('resources/fase4Aces.png');
	btV = loadImage('resources/btV.png');
	btVAces = loadImage('resources/btVAces.png');

	gameVer = loadImage('resources/gameVer.png');
	final = loadImage('resources/final.png');
	credits = loadImage('resources/credits.png');

	fundo = loadImage('resources/background.png');
	solo = loadImage('resources/solo.png');
	grass = loadImage('resources/grass.png');
	luar = loadImage('resources/luar.png');
	clouds = loadImage('resources/clouds.png');
	clouds2 = loadImage('resources/clouds2.png');
	ini = loadImage('resources/ini.png');

	pers1 = loadImage('resources/pers1.png');
	pers2 = loadImage('resources/pers2.png');
	pers3 = loadImage('resources/pers3.png');
	pers4 = loadImage('resources/pers4.png');

	pers5 = loadImage('resources/pers5.png');
	pers6 = loadImage('resources/pers6.png');
	pers7 = loadImage('resources/pers7.png');
	pers8 = loadImage('resources/pers8.png');

	nuv = loadImage('resources/nuv2.png');
	nuvInt = loadImage('resources/nuvInt.png');
	nuvExc = loadImage('resources/nuvExc.png');
	life = loadImage('resources/life.png');

	buraco = loadImage('resources/buraco.png');
	tronco = loadImage('resources/tronco.png');
	tronco2 = loadImage('resources/tronco2.png');
	tronco3 = loadImage('resources/tronco3.png');

	finish = loadImage('resources/finish.png');
	flag = loadImage('resources/flag.png');
  }
  
//Obstaculos
  	//Vetores
	var obts = [],
		obtAlturas = [],
		obtLarguras = [],
		obtX = [],
		obtY = [];
		qtdObts = 24;
	//Tamanhos
		//Troncos com o mesmo tamanho
			  //Larguras sempre iguais
			  for(var i=0;i<qtdObts;i++){
				obtLarguras[i] = 60;
			  }
		for(var i=0;i<6;i++){
			obtAlturas[i] = 100;
		}
		//Troncos diferentes
		obtAlturas[2] = 240;
		obtAlturas[1] = 180;
		//Segunda Leva
		for(var i=6, j=0;i<9;i++,j+=80){
			obtAlturas[i] = 100+j;
		}
		obtAlturas[8] = 240;
		for(var i=9, j=0;i<12;i++,j+=60){
			obtAlturas[i] = 240-j;
		}
		obtAlturas[11] = 100;
		//Terceira Leva
		for(var i=12, j=0;i<15;i++,j+=80){
			obtAlturas[i] = 100+j;
		}
		obtAlturas[14] = 240;
		for(var i=15, j=0;i<18;i++,j+=60){
			obtAlturas[i] = 240-j;
		}
		obtAlturas[17] = 100;
		//Quarta Leva
		for(var i=18, j=0;i<21;i++,j+=80){
			obtAlturas[i] = 100+j;
		}
		obtAlturas[20] = 240;
		for(var i=21, j=0;i<24;i++,j+=80){
			obtAlturas[i] = 200+j;
		}
	//Posicoes
	for(var i=0;i<6;i++){
		obtX[i] = largura*(i+3)*0.40;
		obtY[i] = chaoY - obtAlturas[i];
	}
	obtX[4] = 6000;
	obtY[4] = chaoY - obtAlturas[4];
	obtX[5] = 6500;
	obtY[5] = chaoY - obtAlturas[5];
	for(var i=6, j=60;i<9;i++,j+=60){
		obtX[i] = 4100 + j;
		obtY[i] = chaoY - obtAlturas[i];
	}
	for(var i=9, j=60;i<12;i++,j+=60){
		obtX[i] = 4400 + j;
		obtY[i] = chaoY - obtAlturas[i];
	}
	for(var i=12, j=60;i<15;i++,j+=60){
		obtX[i] = 4900 + j;
		obtY[i] = chaoY - obtAlturas[i];
	}
	for(var i=15, j=60;i<18;i++,j+=60){
		obtX[i] = 5200 + j;
		obtY[i] = chaoY - obtAlturas[i];
	}
	for(var i=18, j=60;i<21;i++,j+=60){
		obtX[i] = 6500 + j;
		obtY[i] = chaoY - obtAlturas[i];
	}
	for(var i=21, j=60;i<24;i++,j+=60){
		obtX[i] = 6500 + j;
		obtY[i] = chaoY - obtAlturas[i];
	}
	obtX[24] = 7000;
	obtY[24] = chaoY - obtAlturas[24];

//Buracos
	//Vetores
	var buracosX = [],
		qtdBuracos = 5;
	//Posicoes
	buracosX[0] = largura*7*0.40;
	buracosX[1] = largura*8*0.38;
	buracosX[2] = largura*10*0.40;
	buracosX[3] = 4350;
	buracosX[4] = 5150;

//Inimigos
	//Vetores
	var inimigos = [],
		inimigosAltura = [],
		inimigosLargura = [],
		inimigosX = [],
		inimigosY = [];
		qtdInimigos = 10;
	//Tamanhos
	var alturaInimigo = 50, larguraInimigo = 50;
	//Posicoes
	for(var i=0;i<qtdInimigos;i++){
		inimigosY[i] = chaoY - alturaInimigo;
	}
		inimigosX[0] = largura*1.1, 
		inimigosX[1] = largura*5*0.39,
		inimigosX[2] = largura*6*0.39, 
		inimigosX[3] = largura*6*0.37, 
		inimigosX[4] = 2500 + 40*30;
		inimigosX[5] = 2500 + 40*27;
		inimigosX[6] = 2500 + 40*85;
		inimigosX[7] = 2500 + 40*83;
		inimigosX[8] = 2500 + 40*80;

//Personagem
	//Características
	var alturaPers = 80, 
		larguraPers = 40,
		x = largura*0.05, 
		y = chaoY - alturaPers,
		raioPers = larguraPers;
	//Variaveis
	var animacao = 1;
	var qtdVidas = 5;
	var qtdPontos = 0;
	//Estados
	var pulo = false;
	var colisao = false;
	var contFrames = 0;
	var frente1 = true;
	var emCima = false;

//Fim de Fase
	var finishX = 7000;
	var finishY = chaoY-500;
	var flagX = 7000-60;
	var flagY = chaoY-500;
	var mvF = 0;

//Telas
	var telas = [];
	var btsT1 = 0;
	var btsT2 = 0;
	var telaAtua = 0;

//Run
function setup() {
  createCanvas(largura, altura);
  frameRate(30);
}

function draw() {
	if(telaAtua == 0){
		background(menu);
		if(btsT1 == 0){
			image(btIniciarAces, largura*0.26, altura*0.60);
			image(btCred, largura*0.55, altura*0.60);
		}else{
			image(btIniciar, largura*0.26, altura*0.60);
			image(btCredAces, largura*0.55, altura*0.60);
		}
		if(keyIsDown(RIGHT_ARROW)){
			btsT1 = 1;
		} 
		if(keyIsDown(LEFT_ARROW)){
			btsT1 = 0;
		}
		if(keyIsDown(ENTER)){
			if(btsT1==1){
				telaAtua = 5;
			} 
			if(btsT1==0){
				telaAtua = 1;
			}
		}
	}
	else if(telaAtua == 1){
		background(fundo);
		image(fases, largura*0.4, altura*0.15);
		if(btsT2 == 0){
			image(fase1Aces, largura*0.15, altura*0.45);
			image(fase2, largura*0.35, altura*0.45);
			image(fase3, largura*0.55, altura*0.45);
			image(fase4, largura*0.75, altura*0.45);
			image(btV, largura*0.45, altura*0.9);
		}
		else if(btsT2 == 1){
			image(fase1, largura*0.15, altura*0.45);
			image(fase2Aces, largura*0.35, altura*0.45);
			image(fase3, largura*0.55, altura*0.45);
			image(fase4, largura*0.75, altura*0.45);
			image(btV, largura*0.45, altura*0.9);
		}
		else if(btsT2 == 2){
			image(fase1, largura*0.15, altura*0.45);
			image(fase2, largura*0.35, altura*0.45);
			image(fase3Aces, largura*0.55, altura*0.45);
			image(fase4, largura*0.75, altura*0.45);
			image(btV, largura*0.45, altura*0.9);
		}
		else if(btsT2 == 3){
			image(fase1, largura*0.15, altura*0.45);
			image(fase2, largura*0.35, altura*0.45);
			image(fase3, largura*0.55, altura*0.45);
			image(fase4Aces, largura*0.75, altura*0.45);
			image(btV, largura*0.45, altura*0.9);
		}
		else if(btsT2 == 4){
			image(fase1, largura*0.15, altura*0.45);
			image(fase2, largura*0.35, altura*0.45);
			image(fase3, largura*0.55, altura*0.45);
			image(fase4, largura*0.75, altura*0.45);
			image(btVAces, largura*0.45, altura*0.9);
		}
		if(keyIsDown(RIGHT_ARROW)){
			if(btsT2<3){
				btsT2++;
			}			
		} 
		if(keyIsDown(LEFT_ARROW)){
			if(btsT2>0){
				btsT2--;
			}	
		}
		if(keyIsDown(DOWN_ARROW)){
			if(btsT2!=4){
				btsT2=4;
			}	
		}
		if(keyIsDown(UP_ARROW) && btsT2==4){
				btsT2=0;
		}
		if(keyIsDown(ENTER)){
			if(btsT2<4){
				telaAtua = 2;
			}else{
				telaAtua = 0;
			}
		}
	}
	else if(telaAtua == 3){
		background(gameVer);
		if(keyIsDown(ENTER)){
				telaAtua = 0;
		}
	}
	else if(telaAtua == 4){
		background(final);
	}
	else if(telaAtua == 5){
		background(credits);
		if(keyIsDown(ENTER)){
			telaAtua = 0;
		}
	}
	else if(telaAtua == 2){
		if(qtdVidas == 0){
			telaAtua = 3;
		}
	//Elementos do Cenario
		//Background
		background(fundo);
		image(luar, luarX, altura*0.20);
		image(clouds, cloudsX, altura*0.20);
		image(clouds2, clouds2X, altura*0.20);
		line(chaoX, chaoY, largura, chaoY);
		
		//rect(300, 300, 50, 50);
		//Elementos de Interação
		for(var i=0;i<qtdNuv;i++){
			image(nuv, nuvX[i], nuvY[i]);
		}
		for(var i=0;i<qtdNuvInt;i++){
			image(nuvInt, nuvIntX[i], nuvIntY[i]);
		}
		
		image(nuvExc, nuvExcX, 360);

		image(life, lifeX, 290);
		//Personagem
		fill(255,200,0);
		if(animacao == 1){
			image(pers1, x, y);
		}
		else if(animacao == 2){
			image(pers2, x, y);
		}
		else if(animacao == 3){
			image(pers3, x, y);
		}
		else if(animacao == 4){
			image(pers4, x, y);
		}
		else if(animacao == 5){
			image(pers5, x, y);
		}
		else if(animacao == 6){
			image(pers6, x, y);
		}
		else if(animacao == 7){
			image(pers7, x, y);
		}
		else if(animacao == 8){
			image(pers8, x, y);
		}			
		//Retangulos
		for(var i=0;i<qtdObts;i++){
			image(tronco, obtX[i], obtY[i]);
		}
		image(tronco3, obtX[1],obtY[1]);
		image(tronco2, obtX[2],obtY[2]);
		image(tronco3, obtX[7],obtY[7]);
		image(tronco2, obtX[8],obtY[8]);
		image(tronco3, obtX[10],obtY[10]);
		image(tronco2, obtX[9],obtY[9]);
		image(tronco3, obtX[13],obtY[13]);
		image(tronco2, obtX[14],obtY[14]);
		image(tronco3, obtX[16],obtY[16]);
		image(tronco2, obtX[15],obtY[15]);
		image(tronco3, obtX[19],obtY[19]);
		image(tronco2, obtX[20],obtY[20]);
		image(tronco3, obtX[21],obtY[21]);
		image(tronco3, obtX[22],obtY[22]);
		image(tronco3, obtX[23],obtY[23]);
		
		//Inimigos
		for(var i=0;i<qtdInimigos;i++){
			image(ini, inimigosX[i], inimigosY[i]);
		}
			//Movimentação (Não ideal)
				//DIFICULDADE (PROVISÓRIA)
				for(var i=0;i<qtdInimigos;i++){
						inimigosX[i] -= 3;
				}
		//Fim de Fase
		image(finish, finishX, finishY);
		image(flag, flagX, flagY);
				if(mvF >= 0){
					if (flagY <= chaoY-500){
						mvF = -1;
					}
					else{
						flagY -= 5;
						mvF++;	
					}
				}
				else{
					if (flagY > chaoY-40){
						mvF = 0;
					}
					else{
						flagY += 5;
						mvF--;	
					}
				}
		//Chao
		for(var i=0;i<11;i++){
			image(solo, soloGrassX[i], altura-45);
			image(grass, soloGrassX[i], altura-85);
		}
		//Buracos
		for(var i=0;i<qtdBuracos;i++){
			image(buraco, buracosX[i], altura-95);
		}
		
	//Progresso da Tela	
    if(x > largura*0.5){
		x=largura*0.5;
        for(var i=0;i<qtdObts;i++){
            obtX[i] -= 10;
		}
		for(var i=0;i<qtdInimigos;i++){
			inimigosX[i] -= 10;
		}
		for(var i=0;i<11;i++){
			soloGrassX[i] -= 10;	
		}
		for(var i=0;i<qtdNuv;i++){
			nuvX[i] -= 10;
		}	
		for(var i=0;i<qtdNuvInt;i++){
			nuvIntX[i] -= 10;
		}
		for(var i=0;i<qtdBuracos;i++){
			buracosX[i] -= 10;
		}
		nuvExcX -= 10;
		lifeX -=10;
		luarX -=0.1;
		cloudsX -=0.5;
		clouds2X -=0.25;
		flagX -=10;
		finishX -= 10;
	} 

	//Informacoes
	textSize(20);
	text('--- LIFE ---',largura*0.10,altura*0.05);
	for(var i=1;i<=qtdVidas;i++){
		rect(largura*((i/2)*0.1),altura*0.1,20,20);
	}
	text('--- POINTS ---',largura*0.70,altura*0.05);
	text(qtdPontos,largura*0.8,altura*0.1);		

	//MECÂNICA DO GAME
		//MOVIMENTACAO
		if ((keyIsDown(UP_ARROW) || keyIsDown(32)) && pulo==false && morteNoBuraco()==false) {
			pulo = true;
			contFrames = 0;
		}
		if (keyIsDown(DOWN_ARROW)){	
		}
		if (keyIsDown(LEFT_ARROW) && x>raioPers && esbarrarLeft() == false){
			if(pulo){
				x-=13;
			}else{
				x-=10;
			}
			if(animacao <=4 || animacao==8){
				animacao = 5;
			}
			else{
				animacao++;
			}
		}
		if (keyIsDown(RIGHT_ARROW) && esbarrarRight() == false){
			if(pulo){
				x+=13;
			}else{
				x+=10;
			}
			if(animacao > 4 || animacao==4){
				animacao = 1;
			}else{
				animacao++;
			}
		}
		//PULO
		if(pulo){
			//Movimento do pulo
				//Mais altura
				if(keyIsDown(UP_ARROW) || keyIsDown(32)){
					y = y + 0.5*(contFrames)*(contFrames - 15);
				}
				//Menos altura
				else{
					y = y + 0.5*(contFrames)*(contFrames - 12);
				}
				contFrames++;
				//Controle de Posicao 
				if(y > chaoY-alturaPers){
					pulo=false;
					y = chaoY-alturaPers;
					contFrames = 0;
				}
				if(esbarrarDown()){
					pulo = false;
					emCima = true;
					contFrames = 0;
				}
				if(puloNoInimigo()){
					pulo = false;
					contFrames = 0;
				}
		}
		if(emCima == true && esbarrarDown()==false && queda() == false && pulo==false){
			y+=10;
			if(y >= chaoY-alturaPers){
				emCima = false;
			}
		}
	
			//COLISAO
			if(mortoPeloInimigo() && pulo==false){
				x = largura*0.05;
				y = chaoY - alturaPers;
				qtdVidas--;
			}
			if(x+larguraPers >= lifeX && x <=lifeX+30 && y+alturaPers == 290+30){
				lifeX = -100;
				qtdVidas++;
			}
			if(morteNoBuraco()){
				if(y == chaoY-alturaPers){
					qtdVidas--;
				}
				if(y > chaoY+alturaPers*3){
					y = chaoY-alturaPers;
					x = largura*0.05;
				}
				y += 3;
			}
			if(x+larguraPers >= finishX){
				telaAtua = 4;
			}
}
}
//FUNÇÕES
	//Verifica Colisões pela Direita
	function esbarrarRight(){
		var aux = 0;
		for(var i=0;i<qtdObts;i++){
			if((x+raioPers >= obtX[i] && y+alturaPers > obtY[i] && x+raioPers <= obtX[i]+obtLarguras[i])){
				x = obtX[i]-raioPers;
				aux++;
			}
		}
		for(var i=0;i<qtdNuv;i++){
			if((x+raioPers >= nuvX[i] && y+alturaPers > nuvY[i] && y+alturaPers <= nuvY-40 && x+raioPers <= nuvX[i]+40)){
				x = nuvX[i]-raioPers;
				aux++;
			}
		}
		if(aux > 0){
			casoEsp = true;
			return true;
		} else{
			return false;
		}
	}
	//Verifica Colisões pela Esquerda
	function esbarrarLeft(){
		var aux = 0;
		for(var i=0;i<qtdObts;i++){
			if(x <= obtX[i]+obtLarguras[i] && y+alturaPers > obtY[i] && x >= obtX[i]){
				x = obtX[i]+obtLarguras[i];
				aux++;
			}
		}
		if(aux > 0){
			return true;
		} else{
			return false;
		}
	}
	//Verifica Colisões por Baixo
	function esbarrarDown(){
		var aux = 0;
		for(var i=0;i<qtdObts;i++){
			if(x+raioPers > obtX[i] && x < obtX[i]+obtLarguras[i] && y > obtY[i]-alturaPers){
				aux++;
				y = obtY[i]-alturaPers;
			}
		}
		for(var i=0;i<qtdNuv;i++){
			if(x+raioPers > nuvX[i] && x < nuvX[i]+40 && y > nuvY[i]-alturaPers){
				aux++;
				y = nuvY[i]-alturaPers;
			}
		}
		if(aux > 0){
			return true;
		} else{
			return false;
		}
	}
	//Verifica Colisões por Cima
	function esbarrarUp(){
		var aux = 0;
		for(var i=0;i<qtdNuv;i++){
			if(x+raioPers > nuvX[i] && x < nuvX[i]+40 && y <= nuvY[i]){
				aux++;
				y = chaoY-alturaPers;
			}
		}
		if(aux > 0){
			return true;
		} else{
			return false;
		}
	}
	//Verifica se um inimigo foi atingido
	function puloNoInimigo(){
		var aux = 0;
		var num;
		for(var i=0;i<qtdInimigos;i++){
			if(x+raioPers > inimigosX[i] && x < inimigosX[i]+larguraInimigo && y >= inimigosY[i]-alturaInimigo){
				aux++;
				qtdPontos++;
				y = chaoY-alturaPers;
				num = i;
			}
		}
		if(aux > 0){
			inimigosY[num] = 8000;
			return true;
		} else{
			return false;
		}
	}
	//Verifica se o personagem foi atingido
	function mortoPeloInimigo(){
		var aux = 0;
		for(var i=0;i<qtdInimigos;i++){
			if(x+raioPers > inimigosX[i] && x < inimigosX[i]+larguraInimigo && y >= inimigosY[i]-alturaInimigo){
				aux++;
				inimigosX[i] = largura*1.1;
				inimigosY[i] = chaoY - alturaInimigo;
			}
		}
		if(aux > 0){
			return true;
		} else{
			return false;
		}
	}
	function queda(){
			var aux = 0;
			for(var i=0;i<qtdObts;i++){
				if(x+raioPers > obtX[i] && x < obtX[i]+obtLarguras[i] && y >= obtY[i]-alturaPers){
					aux++;
				}
			}
			for(var i=0;i<qtdNuv;i++){
				if(x+raioPers > nuvX[i] && x < nuvX[i]+40 && y >= nuvY[i]-alturaPers){
					aux++;
				}
			}
			if(aux > 0){
				return true;
			} else{
				return false;
			}
	}
	function morteNoBuraco(){
		var aux = 0;
		for(var i=0;i<qtdBuracos;i++){
			if(x+raioPers > buracosX[i] && x < buracosX[i]+100 && y >= chaoY-alturaPers){
				aux++;
			}
		}
		if(aux > 0){
			return true;
		}
		else{
			return false;
		}
	}