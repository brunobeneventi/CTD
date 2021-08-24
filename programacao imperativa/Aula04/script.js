//Comentário de uma única linha.

/*
Comentário de múltiplas linhas.
Utilizada principalmente em documentações de código.
*/

var nome = prompt('Qual o seu nome?');
var quantidade = prompt('Qual valor gostaria de cotar?');
var cotacaododolar = 5.30;
var conversao = cotacaododolar*quantidade;

var saudacao = alert("Olá" + " " + nome + "!" + " " + 'US$' + quantidade + " " + 'valem' + " " + 'R$' + " " + conversao + " " + 'Hoje.');
