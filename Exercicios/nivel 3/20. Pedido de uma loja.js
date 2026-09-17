const pedido = {
  produto: "Teclado Mecânico",
  preco: 250,
  quantidade: 2
};

const notafiscal = ({produto, preco, quantidade}) => {
    return `Produto: ${produto}. Quantidade: R$ ${quantidade}. Valor unitário: R$ ${preco}. Total: R$ ${preco*quantidade}.`
};

console.log (notafiscal(pedido));