 // ================================================
 // 2. Template Literal
 // =================================================

 const nome = "Beatriz"
 const curso = "Informática"

 //2.1 Concatenação tradicional (antiga com operador)
 console.log ("A aluna" + nome + "estuda" + curso + ".");

 //2.2 com template literal (usando crases `` e ${})
 console.log (`A aluna ${nome} estuda ${curso}.`);

 //2.3 Template literal com cálculos e expressões no ${  })
 const preco = 50;
 const quantidade = 3;

 console.log (`Total de compra: R$ ${preco * quantidade}`);

 //2.4 Template Literal acessando prpriedades de objetos
 const celular = {
    marca: "Samsung",
    modelo: "Galaxy A55"
 };

 console.log (`celular: ${celular.marca} ${celular.modelo}`);
 