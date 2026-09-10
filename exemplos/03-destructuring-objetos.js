 // ================================================
 // 3. destructuring-objetos
 // =================================================

const professor = {
    nome: "Marcos",
    disciplina: "Programação",
    escola: "SENAI"
}

 // 3.1 sem desestruturação (acesso direto tradicional)
console.log (professor.nome);
console.log (professor.disciplina)

//3.2 com desestruturação (extrai as propriedades em novas variaveis)
const {nome, disciplina} = professor;
console.log ("Com destructuring:", nome, "-", disciplina);

//3.3 Desestruturação parcial (não parcial pgar todas as propriedades)
const computador = {
    marca: "Lenovo",
    memoria: "16 Gb",
    armazenamento: "512 GB",
    procesador: "Ryzem 7"
};

const {marca, processador} = computador; 
console.log (`Computador: Marca ${marca}, Precessador ${processador}`);

//3.4 desestruturação + template literal
const livro = {
    titulo: "JavaScript",
    autor: "Lucas Silva",
    paginas: 320
}

const {titulo, autor, paginas} = livro;
console.log (`${titulo}, escrito por ${autor}, possui ${paginas} páginas.`);

const funcionario = {
    nome: "Ana",
    cargo: "Programadora",
    salario: 5000
}

//A funçãqo já recebe o objeto e extrai as propriedades diretamente nos parênteses:
const exibiFuncionario = ({nome, cargo, salario}) => {
    return `${nome} ocupa o cargo de ${cargo} e recebe R$ ${salario}.`;
}

console.log (exibiFuncionario (funcionario));
// fim