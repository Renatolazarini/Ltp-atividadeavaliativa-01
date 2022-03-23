class Noticias{
  constructor(titulo, data_publicacao, resumo, texto){
    this.titulo = titulo;
    this.data_publicacao = data_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }

mostrarNoticias(){
  return this.titulo + "\n" + "\n" + this.data_publicacao + "\n" + "\n" + this.resumo + "\n" + "\n" + this.texto 
  }
}

let noticia = new Noticias("Titulo da noticia", "23/04/2021", "aqui vai o resumo do texto", "aqui vai o texto")

console.log(noticia.mostrarNoticias())