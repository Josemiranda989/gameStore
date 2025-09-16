'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('products', [
      {
        name: 'The Witcher 3: Cacería Salvaje',
        description: 'Un juego de rol de mundo abierto con una narrativa profunda y combates intensos.',
        image: 'witcher3.jpg',
        genre_id: 3,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'FIFA 23',
        description: 'Simulación de fútbol con licencias oficiales y modos competitivos.',
        image: 'fifa23.jpg',
        genre_id: 6,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Resident Evil Village',
        description: 'Survival horror con elementos de acción y una atmósfera escalofriante.',
        image: 're8.jpg',
        genre_id: 8,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Age of Empires IV',
        description: 'Estrategia en tiempo real basada en eventos históricos.',
        image: 'aoe4.jpg',
        genre_id: 4,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Gran Turismo 7',
        description: 'Simulación de carreras con gráficos realistas y física avanzada.',
        image: 'gt7.jpg',
        genre_id: 7,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Uncharted 4: El Desenlace del Ladrón',
        description: 'Aventura cinematográfica con exploración, acertijos y acción.',
        image: 'uncharted4.jpg',
        genre_id: 2,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Celeste',
        description: 'Juego de plataformas con una historia emotiva y mecánicas precisas.',
        image: 'celeste.jpg',
        genre_id: 10,
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};