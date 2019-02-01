

module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    id: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Author: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    like: DataTypes.INTEGER,
  }, {});
  // books.associate = function(models) {
  //   // associations can be defined here
  // };

  books.insert = async (id, name, author, rating, like) => {
    if (books.findall({
      where: {
        id,
      },
    }) !== {}) {
      return 'Duplicate!!';
    }
    books.create({
      id, Name: name, Author: author, rating, like,
    });
  };

  books.like = async (loveit, id) => books.update({ like: loveit }, {
    where: {
      id,
    },
  });

  return books;
};
