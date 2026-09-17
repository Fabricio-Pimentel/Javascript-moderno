const produto = {
  nome: "Mouse",
  preco: 80 ,
  desconto: 50,
};

const precofinal = ({preco, desconto}) => {
    return `Preço final: ${preco*(desconto/100)}`
};

console.log(precofinal(produto))