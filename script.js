function nadarVerticalmente() {
    const peixe = document.getElementById('peixe');
    const alturaAleatoria = Math.floor(Math.random() * window.innerHeight);
    peixe.style.top = `${alturaAleatoria}px`;
}

const nome =prompt("Digite o seu nome:")
console.log(nome)
const idade =prompt("Digite a sua Idade:")
console.log(nome)
const cidade =prompt("Digite a sua cidade:")
console.log(nome, idade, cidade)
alert("Seja Bem Vindo: " + nome );

