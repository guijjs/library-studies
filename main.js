
//Variável que irá armezenar o array das categorias disponíveis;
const biblioteca = [
    //Cada objeto representa uma categoria da biblioteca.
    {
        //Categoria de livro do objeto em questão
        category: "Terror",
        
        //Irá armazenar os objetos, que serão os autores
        autor: [
            //Cada objeto é um autor
            {
               autorName: "STEPHEN KING",
               //Array que armazenará os livros deste autor
               livros: [
                   "It. A coisa",
                   "The Shining",
                   "Carrie",
                   "Cemitério Maldito",
                   "Jogo Perigoso",
                   "The Outsider"
               ]
            },
            {
                autorName: "EDGAR ALLAN POE",
                livros: [
                    "O Corvo",
                    "Fantasma da Morte Rubra",
                    "Gato Preto",
                    "Eleonora",
                    "Morella"
                ]
            },
            {
                autorName: "H.P LOVECRAFT",
                livros:[
                    "O chamado de Cthulhu",
                    "Dragon",
                    "Azatoth",
                    "The Festival",
                    "O Navio Branco"
                ]
            }
        ],
    },
    {
        //Categoria de livro do objeto em questão
        category: "Filosofia",
        //Irá armazenar os objetos, que serão os autores
        autor:[
            //Cada objeto é um autor
            {
                autorName: "MAQUIAVEL",
                //Array que armazenará os livros deste autor
                livros: [
                    "O Príncipe",
                    "L'art de la Diplomatie",
                    "Belfador, o Arquidiabo",
                    "Epistolario",
                    "O Conspirador+"
                ]
            },
            {
                autorName: "ARISTÓTELES",
                livros: [
                    "Metafísica",
                    "Política",
                    "Da Alma",
                    "Retórica",
                    "Organon",
                    "Ética a Nicômaco"
                ]
            },
        ],
    },
    {
        //Categoria de livro do objeto em questão
        category: "Ficção",

        //Irá armazenar os objetos, que serão os autores
        autor:[
            //Cada objeto é um autor
            {
                autorName: "J.K ROWLING",
                //Array que armazenará os livros deste autor
                livros: [
                    "Harry Potter e A Pedra Filosofal",
                    "Harry Potter e As Relíquias da Morte",
                    "Harry Potter e A Camâra dos Segregos",
                    "Harry Potter e o Cálice de Fogo",
                    "Animais Fantásticos",
                    ""
                ]
            },
            {
                autorName: "RICK RIORDAN",
                livros: [
                    "Percy Jackson: Ladrão de Raios",
                    "Percy Jackson: O Mar de Monstros",
                    "Percy Jackson: A Maldição do Titã",
                    "Percy Jackson: The Battle of The Labyrinth",
                    "Percy Jackson: O Último Olimpiano",
                ]
            }
        ],
    },
];

//Funçção para contar a quantidade de categorias e autores
function contarQtdLivros(quantidadeLivros){
    quantidadeLivros = 0;
    for(let i = 0; i<biblioteca.length; i++){
        for(let books of biblioteca[i].autor){
            quantidadeLivros += books.livros.length;
        }
    }
    console.log(`Em nossa biblioteca temos, no total, ${quantidadeLivros} Livros.`)
}
function contarAutoresECategorias(){
    let numeroAutores = 0;
    let bibliotecaLenght = biblioteca.length
    console.log(`O número de categorias que há na nossa biblioteca: ${bibliotecaLenght}.\n\n`)
    
   for(let i = 0; i<bibliotecaLenght; i++){
       for(categories of biblioteca[i].autor){
        //console.log(`O autor ${categories.autorName} tem ${categories.livros.length} livros na categoria de: ${biblioteca[i].category}`)
       }
       console.log(`As categorias que há em nossa biblioteca são: ${biblioteca[i].category}`)
   }
    //Atribuição do número de atores à variável numeroAutores, conforme o comprimento do array autor
    for(let i = 0; i<bibliotecaLenght; i++){
        numeroAutores += biblioteca[i].autor.length
    }
    console.log(`\nO número de autores, em nossa bibioteca, no total, são: ${numeroAutores}`)
}
function mostrarLivrosAutores(authorName, option){
    //Alert input para obter o nome do autor e comparar-lo para saber se há em nossos arrays
    option = prompt("Deseja pesquisar algum livro?(Sim/Não)").toUpperCase();
    const nomesAutores = [];
    if(option === "SIM"){
        authorName = prompt("Diga o nome do autor: ").toUpperCase()
        let listaLivros;
        //Laço para escrevermos os nomes dos autores com seus livros
        for(let i = 0; i<biblioteca.length; i++){
            for(nomeAutor of biblioteca[i].autor){
                //Criação de um novo array em listaLivros, todavia, com a junção dos itens do array com um espaço
                listaLivros = nomeAutor.livros.join(', ')
                nomesAutores.push(nomeAutor.autorName)
                //Verificação se o nome dado pelo usuário está igual ao do autorName.
                
                if(authorName === nomeAutor.autorName){
                    console.log(`O autor(a) ${nomeAutor.autorName} possui os seguintes livros: ${listaLivros}`)
                }
            }
        }
    }else{
        contarQtdLivros();
        contarAutoresECategorias();
    }
}
try {
    mostrarLivrosAutores();
} catch (e) {
    console.log(e)
}