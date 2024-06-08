"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Children", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      userID: {
        type: Sequelize.UUID,
        references: {
          model: "Users", // Reference the "Companies" table
          key: "id", // Reference the "id" column in the "Companies" table
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      name: {
        type: Sequelize.STRING,
      },
      jenis_kelamin: {
        type: Sequelize.STRING,
      },
      umur: {
        type: Sequelize.INTEGER,
      },
      bb: {
        type: Sequelize.INTEGER,
      },
      pb: {
        type: Sequelize.INTEGER,
      },
      lk: {
        type: Sequelize.INTEGER,
      },
      label: {
        type: Sequelize.STRING,
      },
      ideal: {
        type: Sequelize.TEXT("long"),
      },
      suggestion: {
        type: Sequelize.TEXT("long"),
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
    await queryInterface.dropTable("Children");
  },
};
