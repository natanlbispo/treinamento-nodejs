/*
0 Obter uma usuário;
1 Obter o numero de um usuário a partir do seu ID
2 Obter o endereço de um usuário a partir do seu ID
*/

// importar módulo interno do node.js

const util = require('util');

const getAddressAsync = util.promisify(getAddress);

function getUser(){
    // P/ erro -> reject(ERRO)
    // P/ sucess ->  RESOLVE 
    return new Promise(function resolvePromise(resolve, reject){

        setTimeout(() => {
            //return reject (new Error ('502 Bad Gatway'));
            return resolve({
                id:1,
                name: 'Teste',
                dataN: new Date(),
            
            });
    
        },1000);

    });

}

function getPhonebyId(iduser){
    return new Promise ((resolve, reject)=> {
        
        setTimeout( () =>{
            return resolve ({
                phone: 123,
                ddd: 71,   
            }); 
        }, 2000  );
    });
}

function getAddress(idUser, callback){
    
    setTimeout( () => {

        return callback(null, {
            rua: 'dos lobos',
            numero: 0
        })

    }, 2000);
}

//iniciando com async await

// Passos:
// Adicionar async -> retorno ja vai ser uma promisse
main();
async function main(){

    try {
        const user = await getUser();
        // const phone = await getPhonebyId(user.id);
        // const address = await getAddress(user.id);

        const resultado = await Promise.all([
            getPhonebyId(user.id),
            getAddressAsync(user.id)
        ]);

        const phone = resultado[0];
        const address = resultado[1];

        console.log(` Resultado:
            Nome: ${user.name}
            Telefone: ${phone.phone}
            Endereço: ${address.rua}
        `);
    } catch (error) {
        console.error('Erro', error);
    }

}

// const userPromise = getUser();

// // .then para manipular sucesso
// // .catch para manipular o erro
// userPromise
//     // P/ Sucess
//     .then((user) => {
//         return getPhonebyId(user.id)
//         .then( function resolvePhone (result ){
//             return {
//                 usuario:{
//                     nome: user.name,
//                     id: user.id,
//                 },
//                 telefone: result,
//             }
//         })
//     })
//     .then( (resultado) => {
//         const address = getAddressAsync(resultado.usuario.id);
//         return address.then( function resolveAddress (result ) {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado. telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then( (resultado) => {
//         console.log(` Resultado:
//             Nome: ${resultado.usuario.nome}
//             Endereço: ${resultado.endereco.rua}

//         `);
//     })// P/ Erro
//     .catch( (error) => {
//         console.error(' ', error);
//     });



// const userGet = (erro, user) => {
//     console.log(`Usuário ${user}`);
// }

// errado
// const user = getUser();

// // Certo
// getUser((error, user) => {
    
//     if(error){
//         console.error("Fail user");
//         return;
//     }

//     getPhonebyId(user.id, function phoneGet(error1, phone){
        
//         if(error1){
//             console.error("Fail Phone");
//             return;
//         }
//         console.log(`User: ${user.name}, Phone: ${phone.phone}`)   
//     });
//     console.log(`User: ${user.name}`);
// });

// const phone = getPhonebyId();

// const address = getAddressbyId();

//console.log(`Usuário:  ${user}`);