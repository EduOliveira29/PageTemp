AOS.init();

const dataEvento = new Date("jul 29, 2025 00:00 ");
const timeTempoEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeTempoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteoEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);
    
    document.getElementById('contador').innerHTML = `${diasAteoEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s ` 

    if (distanciaAteOEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);

console.log("eu odeio meu aniversario, fazer algo para enaltecer um desgosto pessoal é o auge da vontade de demonstrar profissionalismo");
