const service = require('./service');

Array.prototype.meuMap = function (callback) {
    const novoArrayMap = [];
    for(let i=0; i <= this.length -1; i++){
        const resultado = callback(this[i], i);
        novoArrayMap.push(resultado);
    }

    return novoArrayMap;
}
const main = async () => {
    try {

        const resultado = await service.opterPessoas('a');
        // const names = [];
        // resultado.results.forEach(item => {

        //     names.push(item.name);

        // });

        // const names = resultado.results.map((item) => item.name );
        // console.log('Name: ', names);

        const names = resultado.results.meuMap((pessoa, indice) => {
            return pessoa.name;
        })
        console.log('Name: ', names);

        

    } catch (error) {
        console.error(error)
    }
}

main();