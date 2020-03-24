const { get } = require("axios");
const URL = `https://swapi.co/api/people`;
//install nock, simular requisições
const nock = require("nock");

const getPerson = async name => {
  const url = `${URL}/?search=${name}&formart=json`;
  const response = await get(url);
  return response.data.results.map(mapPerson);
};

const mapPerson = item => {
  return {
    name: item.name,
    peso: item.height
  };
};

module.exports = {
  getPerson
};
