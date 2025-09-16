const db = require("../database/models/index.js");

module.exports = {
    home: async function (req, res, next) {
        try {
            const products = await db.Product.findAll({
                include: "genre"
            });
            // res.json(products);
            res.render("home.ejs", {products});
        } catch (error) {
            console.log(error);
        }
    },
};
