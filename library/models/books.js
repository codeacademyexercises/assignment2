module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    Name: DataTypes.STRING,
    Author: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    like: DataTypes.INTEGER,
  }, {});
  // books.associate = function(models) {
  //   // associations can be defined here
  // };

  books.insert = async (id, name, author, rating, like) => {
    if (!await books.findAll({
      where: {
        id,
      },
    })) {
      return 'Duplicate!!';
    }
    return await books.create({
      id, Name: name, Author: author, rating, like,
    });
  };

  books.countOfAllRecords = async () => await books.count();

  books.like = async id => await books.update({ like: 1 }, {
    where: {
      id,
    },
    returning: true,
  });

  books.dislike = async id => await books.update({ like: 0 }, {
    where: {
      id,
    },
    returning: true,
  });

  return books;
};
