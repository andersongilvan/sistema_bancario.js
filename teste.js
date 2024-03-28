class Livro{
    titulo
    qtnPaginas


    _autor
    _editora

    get editora(){
        return this._editora
    }


    get autor(){
        return this._autor
    }
    
set editora(novaEditora){
    if(novaEditora instanceof Editora){
        this._editora = novaEditora
    }
}

    set autor(novoAutor){
        if(novoAutor instanceof Autor){
            this._autor = novoAutor
        }
    }



    constructor(titulo,qtnPaginas, autor, editora){
        this.titulo = titulo
        this.qtnPaginas = qtnPaginas
        this._autor = autor
        this._editora = editora
    }
}

class Autor{
    nome
    nacionalidade


    constructor(nomeAutor, nacionalidadeAutor){
        this.nome = nomeAutor
        this.nacionalidade = nacionalidadeAutor
    }
}

class Editora{
    nome 
    endereco


    constructor(editoraNome, editoraEdereco){
        this.nome = editoraNome
        this.endereco = editoraEdereco
    }

}







const editoraFox = new Editora('Fox', 'av. abc 120')
const autorJoao = new Autor('João', 'brasileiro')
const livro1 = new Livro('O Senhor dos Anéis', 100,autorJoao,editoraFox)
console.log(livro1)



