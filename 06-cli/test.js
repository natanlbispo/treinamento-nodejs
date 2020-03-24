const { deepEqual, ok } = require("assert");
const database = require("./database");

const defaultItem = {
  name: "Flash",
  power: "Speed",
  id: 1
};

describe("Suite de manipulção de Herois", () => {
  before(async () => {
    await database.creatHero(defaultItem);
  });

  it("Deve pesquiser um herói usando arquivos", async () => {
    const expected = defaultItem;
    const [result] = await database.lists(1);
    deepEqual(result, expected);
  });

  it("Deve cadastrar um heroi, usando arquivos", async () => {
    const expected = defaultItem;
    const resultado = await database.creatHero(defaultItem);
    const [actual] = await database.getData(defaultItem.id);
    const defaultItemUpdate = {
      name: 'Super Shock',
      power: 'Raio',
      id: 2
    };

    deepEqual(actual, expected);
  });

  it("Deve remover o heroi por id", async () => {
    const expected = true,
      resultado = await database.remover(defaultItem.id);
      
    deepEqual(resultado, expected);
  });

  it("Deve atualizar um heroi pelo ID", async () => {

    const expected = {
      ...defaultItemUpdate,
      name: 'Batman',
      power: 'Rich'
    }

    const newData = {
      name: 'Batman',
      power: 'Rich'
    }

    const resultado = await database.update(defaultItemUpdate.id, newData);
    const resultado = await database.lists(defaultItemUpdate.id);
    deepEqual(resultado, expected);

  }){

  }
});
