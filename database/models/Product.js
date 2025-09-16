module.exports = (sequelize, DataTypes) => {

    const alias = 'Product'

    const columns = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unsigned:true,
            primaryKey: true
        },
        name: {
             type: DataTypes.STRING(200),
        },
        description:  {
             type: DataTypes.TEXT,
        },
        image: {
             type: DataTypes.TEXT,
        },
        genre_id: {
             type: DataTypes.INTEGER,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW, //! PENDIENTE
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW, //! PENDIENTE
        },
    };

    const config = {
        tableName : 'products',
    }

    const Product = sequelize.define(alias, columns, config)

    Product.associate = (model) => {
        // Asociación con generos
        Product.belongsTo(model.Genre, {
            as: 'genre',
            foreignKey: 'genre_id'
        })
    }

    return Product

}