module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        title: "Lancôme La Vie est Belle",
        price: 233.50,
        image: "product1.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Carolina Herrera Ean de Toilette",
        price: 319.99,
        image: "product2.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Givenchy L'Interdit",
        price: 289.0,
        image: "product3.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "212 Vip Black",
        price: 549.0,
        image: "product4.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Amor Cacharel",
        price: 149.0,
        image: "product5.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Dior Sauvage",
        price: 399.80,
        image: "product6.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Yves Saint Laurent",
        price: 299.99,
        image: "product7.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Rauph Lauren Polo Black",
        price: 198.0,
        image: "product8.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Paco Rabanne 1 Million",
        price: 199.0,
        image: "product9.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
