const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {

}

// const meuEmissor = new MeuEmissor();
// const nomeEvento = 'user:click';

// meuEmissor.on(nomeEvento, function (click) {

//     console.log('Um usuário clicou', click);
// });

// meuEmissor.emit(nomeEvento, 'na Barra de Rolagem');
// meuEmissor.emit(nomeEvento, 'no OK');
// c
// let count = 0;
// setInterval(() => {
//     meuEmissor.emit(nomeEvento, 'no ok' + (count ++));
// }, 2000);

const stdin = process.openStdin();
stdin.addListener('data', (value) => {
    console.log(`Voce digitou: ${value.toString().trim()}`);
});