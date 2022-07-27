/* eslint-disable */

mocha.setup("bdd");

const {expect} = chai;

describe("aumentarIdade", () => {
  it("deveria modificar o objeto passado para {nome:'Bonifácio', idade:27} quando pessoa={nome:'Bonifácio', idade:26}", () => {
    const param = {nome: "Bonifácio", idade: 26};
    aumentarIdade(param);
    expect(param.idade).to.equal(27);
  });

  it("deveria modificar o objeto passado para {nome:'Geraldo', idade:50} quando pessoa={nome:'Geraldo', idade:51}", () => {
    const param = {nome: "Geraldo", idade: 50};
    aumentarIdade(param);
    expect(param.idade).to.equal(51);
  });
});

describe("adicionaDobroDoUltimo", () => {
  it("deveria modificar a array passada para [1, 2] quando array=[1]", () => {
    const param = [1];
    adicionaDobroDoUltimo(param);
    expect(param).to.eql([1, 2]);
  });

  it("deveria modificar a array passada para [1, 2, 4] quando array=[1, 2]", () => {
    const param = [1, 2];
    adicionaDobroDoUltimo(param);
    expect(param).to.eql([1, 2, 4]);
  });
});

describe("adicionaEmail", () => {
  it("deveria retornar o objeto {nome: 'Joao', email:'Joao@email.com'} quando pessoa={nome:'Joao'}", () => {
    const param = {nome: "Joao"};
    const retorno = adicionaEmail(param);
    expect(param.email).to.equal(undefined);
    expect(retorno.email).to.equal("Joao@email.com");
  });

  it("deveria retornar o objeto {nome: 'Maria', email:'Maria@email.com'} quando pessoa={nome:'Maria'}", () => {
    const param = {nome: "Maria"};
    const retorno = adicionaEmail(param);
    expect(param.email).to.equal(undefined);
    expect(retorno.email).to.equal("Maria@email.com");
  });
});

describe("adicionaNovoValor", () => {
  it("deveria retornar o array [1, 2] quando array=[1]", () => {
    const param = [1];
    const retorno = adicionaNovoValor(param);
    expect(param).to.eql([1]);
    expect(retorno).to.eql([1, 2]);
  });

  it("deveria retornar o array [1, 2, 3] quando array=[1, 2]", () => {
    const param = [1, 2];
    const retorno = adicionaNovoValor(param);
    expect(param).to.eql([1, 2]);
    expect(retorno).to.eql([1, 2, 3]);
  });
});

mocha.run();
