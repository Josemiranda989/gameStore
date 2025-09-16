module.exports = (sequelize, DataTypes) => {
    const alias = "Genre";

    const columns = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unsigned: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(200),
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
        tableName: "genres",
    };

    const Genre = sequelize.define(alias, columns, config);

        Genre.associate = (model) => {
        // Asociación con generos
        Genre.hasMany(model.Product, {
            as: 'products',
            foreignKey: 'genre_id'
        })
    }


    return Genre;
};
