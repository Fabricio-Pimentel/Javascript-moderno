const notebook = {
  marca: "Dell",
  modelo: "Inspiron",
  preco: 3500,
  desconto: 500
};
const notafiscal = ({preco, desconto, modelo, marca}) => {
    return `Notebook ${marca} ${modelo}. Preço original: R$ ${preco}. Desconto: R$ ${desconto}. Total: R$ ${preco-desconto}.`
};

console.log (notafiscal(notebook));