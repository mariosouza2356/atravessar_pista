let xAtor = 110;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (movientoAtor()){
      yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}
function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15) 
    if(colisao){
      voltaInicio();
      somColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}
function voltaInicio(){
  yAtor = 370;
}
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 215, 0));
  text(meusPontos, width / 2, 27);
}
function marcaPonto(){
  if (yAtor < 15){
    somPontos.play();
    meusPontos += 1;
    voltaInicio();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0;
}
function movientoAtor(){
  return yAtor < 370;
}
