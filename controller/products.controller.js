const db = require("../database/models/index");
const fs = require('fs')
const path = require('path');
const { where } = require("sequelize");

module.exports = {
    // Muestra el prod especifico
    detail: async function (req, res, next) {
        try {
            const product = await db.Product.findByPk(req.params.id, {
                include: "genre",
            });
            // res.json(product)
            res.render("products/detail", { product });
        } catch (error) {
            console.log(error);
        }
    },
    // Muestra el formulario para crear
    create: async function (req, res, next) {
        try {
            const genres = await db.Genre.findAll();
            res.render("products/create", { genres });
        } catch (error) {
            console.log(error);
        }
    },
    // Permite crear un prod
    processCreate: async function (req, res, next) {
        try {
            await db.Product.create({
                name: req.body.name,
                description: req.body.description,
                image: req.file?.filename || "default-image.jpeg",
                genre_id: req.body.genre,
            });

            res.redirect("/");
        } catch (error) {
            console.log(error);
        }
    },
    // Muestra el formulario para editar
    update: async function (req, res, next) {
        try {
            const prod = await db.Product.findByPk(req.params.id)
            const genres = await db.Genre.findAll();
            res.render("products/update", { genres, prod });
        } catch (error) {
            console.log(error);
        }
    },
    // Permite actualizar el prod
    processUpdate: async function (req, res, next) {
            try {
                await db.Product.update(
                    {
                        name: req.body.name,
                        description: req.body.description,
                        image: req.file?.filename,
                        genre_id: req.body.genre,
                    }, {
                        where: {
                            id:req.params.id
                        }
                    }
                )

                res.redirect('/')
            } catch (error) {
                console.log(error)
            }
    },
    // Permite eliminar el prod
    processDelete: async function (req, res, next) {
        try {
            const prodToDelete = await db.Product.findByPk(req.params.id)
            if(prodToDelete.image != 'default-image.jpeg'){
                fs.unlinkSync(path.join(__dirname, '../public/images/products/' + prodToDelete.image))
            }
            await db.Product.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.redirect("/");
        } catch (error) {
            console.log(error);
        }
    },
};
