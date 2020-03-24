const service = require('./service');


const main = async () => {
    try {
        const result = await service.opterPessoas('a');
        const names = [];

        console.time('for')
        for(let i = 0 ; i<=result.results.length - 1; i++){
            const pessoas = result.results[i];
            names.push(pessoas.name);
        }
        console.timeEnd('for');
        // console.log(`names: ${names}`);  faz um toString quando chamado

        console.time('forin');
        for (let i in result.results ){
            const pessoas = result.results[i];
            names.push(pessoas.name);
        }
        console.timeEnd('forin');

        console.time('forof');
        for(pessoa of result.results){
            names.push(pessoa.name);
        }
        console.timeEnd('forof');
        console.log(`names:`, names);
    } catch (error) {
        console.error(error);
    }
}

main();