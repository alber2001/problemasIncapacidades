// const Inconvenientes = require("../models/inconvenientes.model"); // Asegúrate de que la ruta del modelo sea correcta

// const InconvenientesController = {};

// InconvenientesController.mostrarTodos = (req, res) => {
//   Inconvenientes.mostrarTodos((err, results) => { // Eliminamos el parámetro 'fields' ya que no se utiliza
//     if (err) {
//       console.error("Error al recuperar los inconvenientes:", err);
//       res.status(500).json({ error: "Error al recuperar los inconvenientes" });
//     } else {
//       res.status(200).json({ Inconvenientes: results });
//     }
//   });
// };

// module.exports = InconvenientesController;

const Inconvenientes = require("../models/inconvenientes.model");

const InconvenientesController = {};

InconvenientesController.mostrarTodos = (req, res) => {
  Inconvenientes.mostrarTodos((err, results) => {
    if (err) {
      console.error("Error al recuperar los inconvenientes:", err);
      res.status(500).json({ error: "Error al recuperar los inconvenientes" });
    } else {
      res.status(200).json({ inconvenientes: results });
    }
  });
};

module.exports = InconvenientesController;
