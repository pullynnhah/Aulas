import express from "express";

const extrato = [
  {cliente: "Fulano", movimentacao: 300.0, data: "13/01/2022", tipo: "entrada"},
  {cliente: "Ciclana", movimentacao: 210.3, data: "14/01/2022", tipo: "entrada"},
  {cliente: "Ciclana", movimentacao: 500.0, data: "14/01/2022", tipo: "saida"},
  {cliente: "Fulano", movimentacao: 704.3, data: "20/01/2022", tipo: "entrada"},
  {cliente: "Ciclana", movimentacao: 600.0, data: "30/01/2022", tipo: "entrada"},
  {cliente: "Beltrano", movimentacao: 200.5, data: "02/02/2022", tipo: "saida"},
  {cliente: "Fulano", movimentacao: 42.8, data: "02/02/2022", tipo: "saida"},
  {cliente: "Beltrano", movimentacao: 100.0, data: "04/02/2022", tipo: "entrada"},
  {cliente: "Fulano", movimentacao: 20.1, data: "11/02/2022", tipo: "saida"},
  {cliente: "Fulano", movimentacao: 300.0, data: "13/02/2022", tipo: "entrada"},
  {cliente: "Fulano", movimentacao: 30.3, data: "21/02/2022", tipo: "saida"},
  {cliente: "Beltrano", movimentacao: 300.2, data: "25/02/2022", tipo: "entrada"},
  {cliente: "Ciclana", movimentacao: 100.6, data: "30/02/2022", tipo: "entrada"},
  {cliente: "Ciclana", movimentacao: 41.0, data: "03/03/2022", tipo: "saida"},
  {cliente: "Ciclana", movimentacao: 23.0, data: "08/03/2022", tipo: "saida"},
  {cliente: "Fulano", movimentacao: 300.0, data: "13/03/2022", tipo: "entrada"},
  {cliente: "Beltrano", movimentacao: 10.1, data: "15/03/2022", tipo: "saida"},
  {cliente: "Fulano", movimentacao: 30.9, data: "20/03/2022", tipo: "saida"},
];

const app = express();

app.get("/extrato", (req, res) => {
  const {user} = req.headers;
  if (!user) {
    res.sendStatus(401);
    return;
  }

  let extratoFiltrado = extrato.filter(ext => ext.cliente === user);
  const {dia, mes, tipo} = req.query;

  if (dia) {
    extratoFiltrado = extratoFiltrado.filter(ext => ext.data.split("/")[0] === dia);
  }

  if (mes) {
    extratoFiltrado = extratoFiltrado.filter(ext => ext.data.split("/")[1] === mes);
  }

  if (tipo) {
    extratoFiltrado = extratoFiltrado.filter(ext => ext.tipo === tipo);
  }

  res.send(extratoFiltrado);
});

app.listen(5000);
