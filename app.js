//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';

//let paragrador = document.querySelector('p');
//paragrador.innerHTML = 'Escolha um numero entre 1 e 10'; 
///////////////////////////////////////////////////////////////////////////////////

let listaDeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// Função com parametro
function exibirNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}
function mensagemInicial(){
    exibirNaTela('h1','Jogo do numero secreto');
    exibirNaTela('p','Escolha um numero entre 1 e 10!');
}
mensagemInicial();

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

// Função sem parametro
function verificarChute() {
    //console.log('O botão foi clicado ');
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
       exibirNaTela('h1','Você acertou');
       let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
       exibirNaTela('p',mensagemTentativa);  
       document.getElementById('reiniciar').removeAttribute('disabled');
       
    }else{
      if(chute > numeroSecreto){
        exibirNaTela('p','Numero secreto é menor!');
      }else{
        exibirNaTela('p','Numero secreto é maior!');
      }
      tentativas++;
      limparCampo();
    }
}


// Função com retorno
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeElementosNaLista == 10 ){
    listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
   }
}

/*
//Criar uma função que exibe "Olá, mundo!" no console.

function exibeNoConsole(){
    console.log('Olá, mundo!');
}
exibeNoConsole();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.


function exibeNome(nome){
 console.log(`Olá, ${nome}!`);
}

exibeNome('Maria');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobroDoNumero(num){
   let resu = parseInt(num * 2);
   return resu;
}

console.log('O dobro do numero é: ' + dobroDoNumero(3));


//Criar uma função que recebe três números como parâmetros e retorna a média deles.


function media(n1, n2, n3){
  let mediaDosNumeros = parseInt((n1 + n2 + n3) / 3);
  
  return mediaDosNumeros;
}

console.log('A media dos numeros são: ' + media( 9,1,10));

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.


function maiorNumero(nu1, nu2){
    if (nu1 > nu2){
        return alert(`O numero ${nu1} é o maior;`);
    } else{
        return alert(`O numero ${nu2} é o maior;`)
    }
   // nu1 > nu2 : nu1: nu2;

}

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo


function multiplicacaoDoNumero(numer){
 numer = parseInt(numer * numer);
 return numer;
}

console.log(multiplicacaoDoNumero(20));




//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculoIMC(altura,peso){
 return ( peso / (altura *altura))
}
let resulIMC = calculoIMC(160,48);
console.log(resulIMC);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.




 function calcularFatorial(numero) {
    if (numero == 0 || numero == 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
      console.log(fatorial)
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);



//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function conversaoDolar(valorDolar){
  let cotacao = 4.80
  let ValorEmReais = valorDolar * cotacao
  return ValorEmReais.toFixed(2);
}
console.log( conversaoDolar(25));


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calculoAreaEPerimetroRetangulo(altura,largura){
    let area = (largura * altura);
    let perimetro = (2 *(largura + altura));
   return  `A Area é de ${area} e o perímetro é de ${perimetro}`; 
}

console.log(calculoAreaEPerimetroRetangulo(20,25));

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calculoAreaEPerimetroCirculo(raio){
    let perimetro = ((2 * 3.14) * raio);
    let area = (3.14*(raio*raio)) ;
    return `O perimetro é de ${perimetro}, a area é de ${area}`;
}

console.log(calculoAreaEPerimetroCirculo(15));

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.


function tabuada(numero){
    contador = 0;
    while (contador <= 10){
            console.log(numero * contador);
            contador++;
    }
}
tabuada(10);

*/
/*
//Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin' , 'Python'];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

console.log(linguagensDeProgramacao);

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let lista = ['Maria','Clara','Vieira'];

console.log(lista[0]);

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

console.log(lista[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

console.log(lista[2]);
*/