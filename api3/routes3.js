const Joi = require('joi');
const Models = require('../library/models');

const like = async (request, h) => {
  const { id } = request.payload;
  const book = await Models.books.like(id);
  return book;
};

const dislike = async (request, h) => {
  const { id } = request.payload;
  const book = await Models.books.dislike(id);
  return book;
};

module.exports = [
  {
    method: 'PUT',
    path: '/like',
    config: {
      validate: {
        payload: {
          id: Joi.number().required(),
        },
      },
    },
    handler: like,
  },
  {
    method: 'PUT',
    path: '/dislike',
    config: {
      validate: {
        payload: {
          id: Joi.number().required(),
        },
      },
    },
    handler: dislike,
  },
];
