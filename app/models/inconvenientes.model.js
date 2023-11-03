// const { json } = require("express");
// const conexion = require("../config/db.config");

// const Inconvenientes = {};

// Inconvenientes.mostrarTodos = () => {
//   conexion.query(
//     "select * from inconvenientes_certificados",
//     function (err, results, fields) {
//       console.log(results); //aqui envio los datos en consola pero no los recibo en insomnia
//     }
//   );
// };

// module.exports = Inconvenientes;


const conexion = require("../config/db.config");

const Inconvenientes = {};

Inconvenientes.mostrarTodos = (callback) => {
  conexion.query(
    "select * from inconvenientes_certificados",
    function (err, results, fields) {
      if (err) {
        console.error("Error al recuperar los inconvenientes:", err);
        callback(err, null); // Enviar el error a la función de devolución de llamada
      } else {
        callback(null, results); // Enviar los resultados a la función de devolución de llamada
      }
    }
  );
};

module.exports = Inconvenientes;
