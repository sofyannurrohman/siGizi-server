"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      articleId: {
        type: Sequelize.UUID,
        references: {
          model: "Articles", // Reference the "Companies" table
          key: "id", // Reference the "id" column in the "Companies" table
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
      body: {
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
    await queryInterface.dropTable("Comments");
  },
};
