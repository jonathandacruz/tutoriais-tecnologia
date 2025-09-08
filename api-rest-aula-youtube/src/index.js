import express from 'express'
import { connectDB, sequelize } from "./config/database.js";
import Item from "./models/Item.js"
 
const app = express()
app.use(express.json());

app.get("/", (req, res)=> {
    res.status(200).json({"teste": "teste"})
})


app.get("/itens", async (req, res) => {
  const itens = await Item.findAll();
  res.json(itens);
});

app.get("/itens/:id", async (req, res) => {
 

  const item = await Item.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "Item não encontrado" });
  res.json(item);
});

// Criar novo item
app.post("/itens", async (req, res) => {
    console.log()
    if (!req.body.valor) {
        return res.status(400).json({"err" : " o campo valor precisa ser informado"})
    }
  try {
    const novo = await Item.create(req.body);

    
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Atualizar item
app.put("/itens/:id", async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "Item não encontrado" });

  await item.update(req.body);
  res.json(item);
});

// Deletar item
app.delete("/itens/:id", async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "Item não encontrado" });

  await item.destroy();
  res.json({ message: "Item removido com sucesso" });
});


app.listen(80, ()=> {
    console.log("Serivdor rodando")
})