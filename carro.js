//codigo dos carros

let xCarros = [810, 810, 810, 810, 810, 810];
let yCarros = [40, 95, 150, 210, 260, 318];
let velocidadeCarros = [2.7, 3.1, 3.5, 5, 2.9, 4.2];
let velocidadeCarros2 = [3.0, 3.5, 3.5, 5, 3.3, 4.0];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
 }
function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}
function posicaoInicialCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  if (passouDaTela(xCarros[i])){
    xCarros[i] = 810;
  }
  }
}
function passouDaTela(xCarros){
  return xCarros < - 50;
}
