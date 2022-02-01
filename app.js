const express = require('express');
const {randomUUID} = require('crypto')

const app = express();

const products = []

app.use(express.json());

app.post("/products", (req, res) => {

  const {name, price} = req.body;

  const product = {
    name,
    price,
    id: randomUUID()

  }
  products.push(product)

  return res.json(product)
})

app.put("/products/:id", (req, res) => {

  const {id} = req.params;
  const {name, price} = req.body;

  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price
  }

  console.log(products)

  return res.json({message: "produto alterado com sucesso"})

})

app.get("/products/:id", (req, res) => {

  const {id} = req.params;
  const product = products.find((product) => product.id === id);
  console.log(product)

  return res.json(product)
})

app.delete("/products/:id", (req, res) => {

  const {id} = req.params;
  const productIndex = products.findIndex((product) => product.id === id);

  products.splice(productIndex, 1)

  return res.json('Produto removido com sucesso!');

})

app.listen(4002, () => console.log("O servidor está rodando na porta 4002!"))
