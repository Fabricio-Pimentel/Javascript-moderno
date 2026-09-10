 // ================================================
 // 4. destructuring-arrays
 // =================================================

 //4.1 desestruturação básica de array (baseada na Posição dos elementos)
 const cores = ["Azul", "Vermelho", "Verde"];

 const [cor1, cor2, cor3] = cores;

 console.log ("Primeira cor: ", cor1);
 console.log ("Segunda cor: ", cor2);
 console.log ("Terceira cor: ", cor3);
 
 //4.2 Comprando Objetos vs Arrays:
 // - Objeto: o nome da propriedade importa {nome,  idade}
 // - Array: a ordem/posição importa [nome, idade]

 //Exemplo com objetos:
 const pessaobjeto = {
    nome: "Carlos",
    idade: 30
 };

 const { nome, idade } = pessaobjeto;

 console.log (`Objeto -> Nome: $ {nome}, Idade: ${idade}`);

    //Exemplo com arrays:
    const pessoaarray = ["Carlos", 30];
    const [nomeAluno, idadeAluno] = pessoaarray;
    console.log (`Array -> nome: ${nomeAluno}, Idade: ${idadeAluno}`); 