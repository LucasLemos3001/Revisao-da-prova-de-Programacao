function questao15() {
    const filme = {
      nome: prompt("Digite o nome do filme:"),
      classificacao: parseInt(prompt("Digite a classificação indicativa (em anos):"))
    };
  
    let faixaEtaria = "";
  
    if (filme.classificacao === 0) {
      faixaEtaria = "Livre para todos os públicos";
    } else if (filme.classificacao <= 10) {
      faixaEtaria = "Não recomendado para menores de 10 anos";
    } else if (filme.classificacao <= 14) {
      faixaEtaria = "Não recomendado para menores de 14 anos";
    } else if (filme.classificacao <= 18) {
      faixaEtaria = "Não recomendado para menores de 18 anos";
    } else {
      faixaEtaria = "Classificação desconhecida";
    }
  
    alert(`Filme: ${filme.nome}\nClassificação: ${filme.classificacao} anos\nFaixa etária: ${faixaEtaria}`);
  }