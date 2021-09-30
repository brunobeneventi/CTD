// 1.Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status.
// A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
// A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.

const produtos = [
  {
    nomeProduto: 'Geladeira',
    valorProduto: 2900,
    qualidadeProduto: 10,
    Status: true,
  },
  {
    nomeProduto: 'Fogão',
    valorProduto: 890,
    qualidadeProduto: 8,
    Status: true,
  },
  {
    nomeProduto: 'Máquina de lavar',
    valorProduto: 1800,
    qualidadeProduto: 9,
    Status: false,
  },
  {
    nomeProduto: 'Ar condicionado',
    valorProduto: 2250,
    qualidadeProduto: 9,
    Status: true,
  },
  {
    nomeProduto: 'Máquina de lavar',
    valorProduto: 1750,
    qualidadeProduto: 8,
    Status: true,
  },
  {
    nomeProduto: 'Cooktop',
    valorProduto: 850,
    qualidadeProduto: 7,
    Status: false,
  },
]

// 2.Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os produtos que tenham:
// Valor entre 482 e 1600;
// Qualidade superior a 6;
// Status como disponível.
// O resultado do filtro deve ser armazenado na variável carrinho.

const carrinho = produtos.filter((produto) => {
  return (
    produto.valorProduto >= 482 &&
    produto.valorProduto <= 1600 &&
    produto.qualidadeProduto > 6 &&
    produto.statusProduto == true
  )
})
console.log(carrinho)

// 3.Por fim, é necessário exibir todos os itens presentes no carrinho, com seus nomes e preços correspondentes, e no final um valor total, resultante da somatória de todos os produtos.

const resumo = carrinho.forEach((carrinho) => {
  console.log(
    `Descrição do Produto: ${carrinho.descricaoDoProduto}\nValor do Produto: R$ ${carrinho.valorDoProduto}`,
  )
})

const valorTotal = carrinho.reduce((valor, numero) => {
  return valor.valorDoProduto + numero.valorDoProduto
})
console.log('Valor Total dos Produtos: R$ ', valorTotal)
