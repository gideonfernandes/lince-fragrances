module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('stocks', [
      {
        product_id: 1,
        amount: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 2,
        amount: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 3,
        amount: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 4,
        amount: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 5,
        amount: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 6,
        amount: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 7,
        amount: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 8,
        amount: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 9,
        amount: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stocks', null, {});
  },
};
