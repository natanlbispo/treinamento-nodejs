// import axios from 'axios';

const axios = require('axios');

const URL = `https://swapi.co/api/people`;

const pessoas = async (nome) =>{
    const url = `${URL}/?search=${nome}&formart=json`;
    const response = await axios.get(url);
    return response.data;
};

// pessoas('r2').then( (resultado) => {

//     console.log('resultado', resultado);
// })
// .catch((erro) => {
//     console.error(erro);
// });


module.exports = {
    opterPessoas: pessoas
}