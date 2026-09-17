const aluno = {
  nome: "Lucas",
  nota1: 8,
  nota2: 6
};

const calcularMedia =  ({nome, nota1, nota2}) => {
    return `${nome} ficou com ${(nota1+nota2)/2} na média.`
};

console.log(calcularMedia(aluno));