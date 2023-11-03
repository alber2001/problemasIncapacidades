const express = require("express");
const app = express();
const port = 3000;
const inconvenientesRoutes = require("./app/routes/inconvenientes.route");


app.use("/api", inconvenientesRoutes);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
