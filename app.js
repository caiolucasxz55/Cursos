let listaDeNumerosSorteados = [];
let numeroLimite = 10;//
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNomeTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exibirMensagemInicial() {
    exibirNomeTexto('h1','jogo do numero secreto ');
    exibirNomeTexto('p','digite um numero de 1 a 10 ');

 }
exibirMensagemInicial()


function textoAcertou() {
    exibirNomeTexto('h1','VOCE ACERTOU!!');
    exibirNomeTexto('p',`voce descobriu o numero secreto em, ${tentativas} tentativas `);
}


function textoErrouMaior() {
    exibirNomeTexto('h1','Voce Errou');
    exibirNomeTexto('p','Tente chutar numeros mais baixos.'); 
}


function textoErrouMenor() {
    exibirNomeTexto('h1','Voce Errou');
    exibirNomeTexto('p','Tente chutar numeros mais altos.');
    
}


function verificarChute(){
    let chute = document.querySelector('input').value;
    

    if (chute == numeroSecreto){
        textoAcertou()
        document.getElementById('reiniciar').removeAttribute('disabled');
            
    } else {
        if (chute > numeroSecreto){
            textoErrouMaior()
       
        } else {
            textoErrouMenor()
        }
        tentativas++
        limparCampo();
        
    }
}


function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }


//     let numeroEscolhido = parseInt(Math.random() * 10 + 1)
//    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
//     return gerarNumeroAleatorio()
//    } else {
//     listaDeNumerosSorteados.push(numeroEscolhido);
//     // console.log(listaDeNumerosSorteados);
//     return numeroEscolhido;
//    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

function reiniciarJogoDoZero() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

