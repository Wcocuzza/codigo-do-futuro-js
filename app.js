const livros = require('./database');

const readline = require('readline-sync');
const inputInicial = readline.question('Deseja buscar um livro? [S/N] ');

if (inputInicial.toLowerCase() === 's') {
    console.log('Essas são as categorias disponiveis:');
    console.log('| Produtividade', '| História brasileira', '| Américas', '| Tecnologia', '| Estilo de vida |');
    const inputCategoria = readline.question('Escolha uma categoria: ');
    const listaLivrosCategoria = livros.filter(livro => livro.categoria.toLowerCase() === inputCategoria.toLowerCase())
    console.table(listaLivrosCategoria);
} else {
    const listaLivrosOrdenado = livros.sort((a, b) => a.paginas - b.paginas);
    console.log('Esses são todos os livros disponiveis:');
    console.table(listaLivrosOrdenado);
}
