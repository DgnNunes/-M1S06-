function nadarVerticalmente() {
    const peixe = document.getElementById('peixe');
    const alturaAleatoria = Math.floor(Math.random() * window.innerHeight);
    peixe.style.top = `${alturaAleatoria}px`;
}
