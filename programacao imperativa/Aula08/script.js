//Salomão Santos
//Eduardo Ananias
//Luan Dos Santos
//Kevin Miranda
//Luciano Silva
//Bruno Beneventi

function calcularImc() {
  var peso = prompt('Qual seu peso?')
  var altura = prompt('Qual sua Altura?')
  var resultadoImc = peso / (altura * altura)
  var perfilImc = null
  var consultar = null
  var nome = null
  var diaDaSemana = null
  var horario = null
  var confirmar = null

  if (resultadoImc <= 18.5) {
    perfilImc = 'MAGRESA'
  } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
    perfilImc = 'NORMAL'
  } else if (resultadoImc >= 25 && resultadoImc <= 29.9) {
    perfilImc = 'OBESIDADE'
    consultar = confirm(
      'Você gostaria de agendar uma consulta com nosso nutricionista ?'
    )
    if (consultar == true) {
      nome = prompt('Qual seu nome')
      diaDaSemana = prompt('Qual o melhor dia da Semana para a Consulta')
      horario = prompt('Qual o melhor horario?')
      confirmar = confirm(
        `Sua consulta será agendada para ${diaDaSemana} as ${horario}`
      )
    } else {
      alert('Obrigado pela sua resposta!')
    }
  } else if (resultadoImc >= 30 && resultadoImc <= 39.9) {
    perfilImc = 'OBESIDADE GRAVE'
    if (consultar == true) {
      nome = prompt('Qual seu nome')
      diaDaSemana = prompt('Qual o melhor dia da Semana para a Consulta')
      horario = prompt('Qual o melhor horario?')
      confirmar = confirm(
        `Sua consulta será agendada para ${diaDaSemana} as ${horario}`
      )
    } else {
      alert('Obrigado pela sua resposta!')
    }
  }

  alert(`Seu IMC é iqual a:${resultadoImc} e sua seu perfil é:${perfilImc}`)
}

/*
                Nível I - Refatorando
            O que pode ser feito para melhorar a legibilidade¹ do código?

            ¹Facilidade de entendimento do algoritimo gerado no código. 

            Nível II - Adicionando novas funcionalidades
            O usuário com sobrepeso, obsidade e/ou obsidade grave deverão:
            - Receber uma alerta recomendando uma consulta com nutricionista (Boleano - true ou false);
                - Caso a resposta seja sim, preencherá com:
                    - Seu nome;
                    - Dia da semana que pretende se consultar;
                    - O horário do dia que pretende se consultar;
                    - Agradecer o usuário pelo nome e informar o dia e horário da consulta com o Dra. Luana Nagydai.
                - Caso a resposta seja não:
                    - Receberá um pedido de agradecimento.

            Nível III - Correção de error 
            (🍒 do bolo)
            Recebemos um pedido de alteração da clínica:
            O usuário com sobrepeso, obsidade e/ou obsidade grave deverão:
            - Receber uma alerta recomendando uma consulta com nutricionista (Boleano - true ou false);
                - Caso a resposta seja sim, preencherá com:
                    - Seu nome;
                    - Dia da semana que pretende se consultar;
                    - O horário do dia que pretende se consultar;
                    (ajuste)
                    - Confirmar com o usuário se o dia e o horário estão corretos:
                        Caso a resposta seja sim:
                        - Segue o fluxo normalmente.
                    - Caso a resposta seja não:
                        - Dia da semana que pretende se consultar;
                        - O horário do dia que pretende se consultar;
                    (fim do ajuste)
                    - Agradecer o usuário pelo nome e informar o dia e horário da consulta com o Dra. Luana Nagydai.
                - Caso a resposta seja não:
                    - Receberá um pedido de agradecimento.

        */
