const produto = {
  nome: "Mouse",
  preco: 80
};


const exibirfrase = ({nome, preco}) => {
    return `Produto: ${nome} - Preço: ${preco}.`
};
console.log (exibirfrase(produto))