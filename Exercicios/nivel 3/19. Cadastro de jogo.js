const jogo = {
    titulo: 'Minecraft',
    genero: 'sandbox',
    preco:"R$ 99"

}

const exibirJogo = ({titulo, genero, preco}) => {
    return `${titulo} é um jogo do gênero ${genero} e custa ${preco}.`
};
console.log (exibirJogo(jogo))