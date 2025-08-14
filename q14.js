function questao14() {
    const livro1 = {
      titulo: prompt("Digite o título do primeiro livro:"),
      autor: prompt("Digite o autor do primeiro livro:"),
      ano: parseInt(prompt("Digite o ano de publicação do primeiro livro:")),
      paginas: parseInt(prompt("Digite o número de páginas do primeiro livro:")),
      nacionalidadeAutor: prompt("O autor do primeiro livro é brasileiro? (sim/não)").toLowerCase()
    };
  
    const livro2 = {
      titulo: prompt("Digite o título do segundo livro:"),
      autor: prompt("Digite o autor do segundo livro:"),
      ano: parseInt(prompt("Digite o ano de publicação do segundo livro:")),
      paginas: parseInt(prompt("Digite o número de páginas do segundo livro:")),
      nacionalidadeAutor: prompt("O autor do segundo livro é brasileiro? (sim/não)").toLowerCase()
    };
  
    // Livro mais antigo
    let maisAntigo = (livro1.ano < livro2.ano) ? livro1 : livro2;
  
    // Livro com mais páginas
    let maisPaginas = (livro1.paginas > livro2.paginas) ? livro1 : livro2;
  
    // Verifica autor brasileiro
    let autorBrasileiro = null;
    if (livro1.nacionalidadeAutor === "sim") {
      autorBrasileiro = livro1;
    } else if (livro2.nacionalidadeAutor === "sim") {
      autorBrasileiro = livro2;
    }
  
    let mensagem = `Livro mais antigo: ${maisAntigo.titulo} (${maisAntigo.ano})\n`;
    mensagem += `Livro com mais páginas: ${maisPaginas.titulo} (${maisPaginas.paginas} páginas)\n`;
  
    if (autorBrasileiro) {
      mensagem += `Livro com autor brasileiro: ${autorBrasileiro.titulo} - ${autorBrasileiro.autor}`;
    } else {
      mensagem += "Nenhum dos autores é brasileiro.";
    }
  
    alert(mensagem);
  }