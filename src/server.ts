import express from "express";

import { Challenges } from './challenges'

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Welcome to Dont be sedentary api | Teste para o video" });
});


app.get("/challenges", (request, response) => {
  return response.json(Challenges)
})

app.listen(process.env.PORT || 3333, () => {
  console.log("Server started on port 3333!");
});
