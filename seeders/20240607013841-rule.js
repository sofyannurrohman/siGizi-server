"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rules",
      [
        {
          umur: 0,
          energi: 550,
          lemak: 34,
          karbohidrat: 58,
          protein: 12,
          kalsium: 200,
          tag: "0-6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          umur: 7,
          energi: 725,
          lemak: 36,
          karbohidrat: 82,
          protein: 18,
          kalsium: 250,
          tag: "7-11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          umur: 12,
          energi: 1125,
          lemak: 44,
          karbohidrat: 155,
          protein: 26,
          kalsium: 650,
          tag: "12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
