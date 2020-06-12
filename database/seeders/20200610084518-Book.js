const models = require("../../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Authors", [
      { name: "Thomas" },
      { name: "Adi" },
    ]);

    const thomas = await models.Author.create({ name: 'Thomas' })
    const adi = await models.Author.create({ name: 'Adi' })
    
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Learn NodeJS with Thomas",
          createdAt: new Date(),
          updatedAt: new Date(),
          authorId: thomas.id
        },
        {
          title: "Learn sequelize with adi",
          createdAt: new Date(),
          updatedAt: new Date(),
          authorId: adi.id
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
