// caso queria algo especifico de .sevice
const { opterPessoas } = require ('./service');

/*
const item= {
    nome:'Teste',
    idafe: 12
}

const {nome } = item
console.log(nome);
*/

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for (let index = 0; index <= this.length - 1; index++) {
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}

async function main () {
    try {
        const { results } = await opterPessoas(`a`);
        
        // console.log(results);
        const pesos = results.map( itens => parseFloat(itens.height));
        const total = pesos.reduce( (anterior, proximo) => anterior + proximo );
        //Para um array vazio
        // const total = [].reduce( (anterior, proximo) => anterior + proximo, 0 );
        console.log(total);
    } catch (error) {
        console.error('Erro tipo: ',error);
    }
}


async function mainReduce() {
    try {
        const { results } = await opterPessoas(`a`);
        
        // console.log(results);
        const pesos = results.map( itens => parseFloat(itens.height));
        const minhaLista = [
            ['Erick', 'Wendel'],
            ['NodeBR', 'Nerdzão']
        ]
        const total = minhaLista.meuReduce((anterior, proximo) => {
                return anterior.concat(proximo)
            }, [])
            .join(', ')
        console.log(total)
    } catch (error) {
        console.error('Erro tipo: ',error);
    }
}

// main();
mainReduce();