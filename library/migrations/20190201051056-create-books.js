

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('books', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    Name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    Author: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.FLOAT,
      defaultValue: null,
    },
    like: {
      type: Sequelize.INTEGER,
      defaultValue: null,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('books'),
};
