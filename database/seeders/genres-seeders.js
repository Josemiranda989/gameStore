"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "genres",
            [
                {
                    id: 1,
                    name: "Acción",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    name: "Aventura",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    name: "Rol",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    name: "Estrategia",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    name: "Simulación",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    name: "Deportes",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 7,
                    name: "Carreras",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 8,
                    name: "Terror",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 9,
                    name: "Puzzle",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                { id: 10, name: "Plataformas" },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Generos", null, {});
    },
};
