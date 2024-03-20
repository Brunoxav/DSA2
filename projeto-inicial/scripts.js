var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);

var nome = document.getElementById("nome");

var email = document.getElementById("email");

var saida = document.getElementById("saida-de-dados");

var tel = document.getElementById("tel");

var cep = document.getElementById("cep");

var log = document.getElementById("log");

var num = document.getElementById("num");

var compl = document.getElementById("compl");

var brr = document.getElementById("brr");

var cid = document.getElementById("cid");

var est = document.getElementById("est");

function alertar(event){
    //alert("Você clicou num botão azul!!!" + " " + nome.value); 

    saida.innerText=
      "Nome: " + nome.value +
     "\n Email: " +email.value +
     "\n Telefone: "+tel.value +
     "\n CEP: "+cep.value +
     "\n Logradouro: "+log.value +
     "\n Número: "+num.value +
     "\n Complemento: "+compl.value +
     "\n Bairro: "+brr.value +
     "\n Cidade: "+cid.value +
     "\n Estado: "+est.value;

}