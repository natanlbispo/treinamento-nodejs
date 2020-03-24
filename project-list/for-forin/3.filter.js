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

Array.prototype.meuFilter = (callback) =>{
    const list = []
    for(index in this ){
        const item = this[index];
        const  result = callback(item, index, this);
        if(!result) continue;
        lista.push(item);
    }
    return lista;
}

async function mainFilter () {
    try {
        const { results } = await opterPessoas(`a`);
        
        // console.log(results);

        const familiaLars = results.filter( (item) =>{
            //retorna boolean
            //true manten
            // retira
            const  result = item.name.toLowerCase().indexOf(`lars`) !== -1;
            return result;
        });

        const names =  familiaLars.map( (pessoa) => pessoa.name);
        console.log(names);
    } catch (error) {
        console.error('Erro tipo: ',error);
    }
}


async function main () {
    try {
        const { results } = await opterPessoas(`a`);
        
        // console.log(results);

        const familiaLars2 = results.meuFilter((item, index, lista) => 
            item.name.toLowerCase().indexOf(lars) !== -1    
        ); 

        const names =  familiaLars.map( (pessoa) => pessoa.name);
        console.log(names);
    } catch (error) {
        console.error('Erro tipo: ',error);
    }
}

// main();
mainFilter();