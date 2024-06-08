"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Suplements",
      [
        {
          name: "Nordic Natural Baby's DHA",
          description:
            "Suplement ini mengandung vitamin A, vitamin D3, EPA, DHA, dan asam lemak omega-3 lainnya. Kandungan minyak ikan cod yang dimilikinya baik dalam mendukung perkembangan otak dan visual bayi.",
          url: "url",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nordic Natural Baby's DHA",
          description:
            "Suplement ini mengandung vitamin A, vitamin D3, EPA, DHA, dan asam lemak omega-3 lainnya. Kandungan minyak ikan cod yang dimilikinya baik dalam mendukung perkembangan otak dan visual bayi.",
          url: "url",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apialys Drops",
          description:
            "suplemen vitamin untuk masa pertumbuhan bayi dan meningkatkan nafsu makannya. Suplemen ini mengandung vitamin A, vitamin D3, riboflavin, dan masih banyak lagi. Selain mengandung vitamin dan mineral untuk membantu memenuhi kebutuhan Si Kecil, Apialys Drops juga membantu mempercepat proses penyembuhan saat anak sakit.",
          url: "url",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Liprolac Baby Drops",
          description:
            "mengandung prebiotik Bifidobacterium lactis yang bermanfaat untuk mengoptimalkan kesehatan pencernaan, mengatasi gangguan pencernaan, meningkatkan fungsi daya tahan tubuh, dan memperbaiki proses penyerapan makanan pada anak.",
          url: "url",
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
