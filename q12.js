function questao12() {
    const produto = {
      nome: "Celular Samsung",
      preco: 1800.00,
      emEstoque: true
    };
  
    if (produto.emEstoque) {
      alert("Produto disponível");
    } else {
      alert("Produto indisponível");
    }
  }