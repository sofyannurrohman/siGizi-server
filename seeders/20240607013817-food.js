"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Food",
      [
        {
          name: "Asi / Susu",
          description:
            "Berikan Asi/Susu secara teratur. ASI/Susu formula kaya akan protein, lemak, karbohidrat, vitamin, dan mineral yang penting untuk pertumbuhan dan perkembangan bayi.",
          tag: "0-6",
          url: "url",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bubur beras merah dengan ayam dan brokoli",
          description:
            "Kaya akan protein, karbohidrat, serat, vitamin A, C, dan K, serta kalsium.",
          tag: "6-8",
          url: "url",
          type: "siang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Puree pisang dengan alpukat",
          description:
            "Kaya akan protein, lemak sehat, serat, kalium, dan vitamin C.",
          tag: "6-8",
          url: "url",
          type: "pagi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sup ubi jalar dengan wortel",
          description:
            "Kaya akan protein, lemak sehat, serat, kalium, dan vitamin C.",
          tag: "6-8",
          url: "url",
          type: "malam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nasi tim dengan ikan salmon dan bayam",
          description:
            "Kaya akan protein, karbohidrat, serat, vitamin A, C, dan K, serta kalsium.",
          tag: "8-12",
          url: "url",
          type: "siang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Telur rebus yang dihaluskan dengan alpukat",
          description:
            "Kaya akan protein, lemak sehat, kolin, vitamin A, D, dan E.",
          tag: "8-12",
          url: "url",
          type: "siang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sup lentil dengan tomat",
          description:
            "Kaya akan protein, serat, zat besi, folat, vitamin A, dan C.",
          tag: "8-12",
          url: "url",
          type: "malam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nasi merah dengan ayam goreng dan tumis buncis",
          description:
            "Kaya akan protein, karbohidrat kompleks, serat, vitamin A, C, dan K, serta zat besi.",
          tag: "12",
          url: "url",
          type: "siang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salmon panggang dengan kentang tumbuk dan brokoli",
          description:
            "Kaya akan protein, omega-3, vitamin A, C, dan K, serta serat.",
          tag: "12",
          url: "url",
          type: "pagi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sup ayam dengan wortel dan makaroni",
          description:
            "Kaya akan protein, karbohidrat kompleks, serat, vitamin A, C, dan K, serta zat besi.",
          tag: "12",
          url: "url",
          type: "malam",
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
