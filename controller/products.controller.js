module.exports = {
    // Muestra el prod especifico
    detail: function (req, res, next) {
        res.render("products/detail");
    },
    // Muestra el formulario para crear
    create: function (req, res, next) {
        res.render("products/create");
    },
    // Permite crear un prod
    processCreate: function (req, res, next) {
   
    },
    // Muestra el formulario para editar
    update: function (req, res, next) {
        res.render("products/update");
    },
    // Permite actualizar el prod
    processUpdate: function (req, res, next) {

    },
    // Permite eliminar el prod
    processDelete: function (req, res, next) {

    },
};
