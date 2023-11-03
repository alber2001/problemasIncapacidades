const express = require("express");
const router = express.Router();

const InconvenientesController = require("../controller/inconvenientes.controler");

router.get(
  "/inconvenientes",
  InconvenientesController.mostrarTodos
);

module.exports = router;
