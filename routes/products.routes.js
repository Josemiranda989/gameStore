var express = require("express");
const {
    detail,
    create,
    processCreate,
    processUpdate,
    update,
    processDelete,
} = require("../controller/products.controller");
var router = express.Router();

// Muestra el prod especifico
router.get("/detail/:id", detail);
// Muestra el formulario para crear
router.get("/create", create);
// Permite crear un prod
router.post("/create", processCreate);
// Muestra el formulario para editar
router.get('/update/:id', update )
// Permite actualizar el prod
router.put('/update/:id', processUpdate )
// Permite eliminar el prod
router.delete('/delete/:id', processDelete )

module.exports = router;
