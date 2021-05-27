import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Dont be sedentary" });
});

app.listen(process.env.PORT || 3333, () => {
  console.log("Server started on port 3333!");
});
