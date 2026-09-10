 // ================================================
 // 5. métodos de array - filter
 // =================================================

 // --- FILTER (selecione todos que atendem a uma condição) ---

 // 5.1 filter() com números
 const notas = [5, 7, 8, 9, 10];
 const aprovadas = notas.filter((nota) => nota >= 7);

 console.log("Notas aprovadas  (>= 7): ", aprovadas); // [7, 8, 9, 10]

 // 5.2 filter() com objetos
 const jogos =  [
    {nome: "Jogo A", preco: "50"},
    {nome: "Jogo B", preco: "30"},
    {nome: "Jogo C", preco: "80"}
 ];

 const jogosBaratos = jogos.filter((jogo) => jogo.preco < 100);
 console.log ("Jogos co preco menor que 100:", jogosBaratos);


// --- Find (encontra e retorna apenas o PRIMEIRO que atende) ---

//2 5.3 find() com números
const numeros = [10, 25, 40, 60];
const primeiroMaiorQue30 = numeros.find((numero) => numero > 30);

console.log ("Primeiro número > 30:", primeiroMaiorQue30); //40

//5.4 find() com aray de objetos
const alunos = [
    {nome: "Ana", matricula: 101},
    {nome: "Bruno", matricula: 102},
    {nome: "Camila", matricula: 103}
];

const alunosescontrados = alunos.find((alunos) => alunos.matricula ===102);

//fim

