"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      umur: {
        type: Sequelize.INTEGER,
      },
      energi: {
        type: Sequelize.INTEGER,
      },
      lemak: {
        type: Sequelize.INTEGER,
      },
      karbohidrat: {
        type: Sequelize.INTEGER,
      },
      protein: {
        type: Sequelize.INTEGER,
      },
      kalsium: {
        type: Sequelize.INTEGER,
      },
      tag: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Rules");
  },
};
