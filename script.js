// Simulação de rodadas do cassino
let rodadas = ["B", "P", "B", "B", "P", "B", "B", "P", "B", "B", "B"];

function analisar() {
    let banker = rodadas.filter(r => r === "B").length;
    let player = rodadas.filter(r => r === "P").length;

    let resultadoDiv = document.getElementById("resultado");

    if (banker > player) {
        resultadoDiv.innerHTML = "SINAL: BANKER 📌";
    } else if (player > banker) {
        resultadoDiv.innerHTML = "SINAL: PLAYER 📌";
    } else {
        resultadoDiv.innerHTML = "SINAL: NEUTRO ⚠";
    }
}

setInterval(analisar, 1000);
