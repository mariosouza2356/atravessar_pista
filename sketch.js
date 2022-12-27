
function setup() {
  createCanvas(800, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentoAtor();
  posicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
 
