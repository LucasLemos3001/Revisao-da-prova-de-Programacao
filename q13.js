function questao13() {
    const pessoa = {
      nome: "João",
      peso: 70,
      altura: 1.75,
      temperatura: 38.2
    };
  
    if (pessoa.temperatura > 37.5) {
      alert(`${pessoa.nome} está com febre.`);
    } else {
      alert(`${pessoa.nome} não está com febre.`);
    }
  }