const { readFile, writeFile } = require("fs");

const { promisify } = require("util");

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

//outra forma de obter dados do json
/*
const dataJson = require('./herois.json);
*/

class Database {
  constructor() {
    this.nameData = "heroes.json";
  }

  async getData() {
    const data = await readFileAsync(this.nameData, "utf8");
    return JSON.parse(data.toString());
  }

  async writeData(dados) {
    await writeFileAsync(this.nameData, JSON.stringify(dados));
    return true;
  }

  async creatHero(heroi) {
    const dados = await this.getData();
    const id = heroi.id <= 2 ? heroi.id : Date.now();
    const heroiCId = {
      id,
      ...heroi
    };
    const dadosFinal = [...dados, heroiCId];
    const resultado = await this.writeData(dadosFinal);
    return resultado;
  }

  async lists(id) {
    const dados = await this.getData();
    const dadosFilter = dados.filter(item => (id ? item.id === id : true));
    return dadosFilter;
  }

  async remover(id) {
    if (!id) {
      return await this.writeData([]);
    }
    const dados = await this.getData();
    const indice = dados.findIndex(item => item.id === parseInt(id));
    if (indice === -1) {
      throw Error("O heroi não existe");
    }

    dados.splice(indice, 1);
    return await this.writeData(dados);
  }

  async update(id, modificadores) {
    const dados = await this.getData();
    const idice = dados.findIndex(item => item.id === parseInt(id));
    return false;
  }
}

module.exports = new Database();
