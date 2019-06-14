/**
 * Products.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    categoryId: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    amount : {
      type: 'float',
      required: true
    },
    quantity: {
      type: 'int',
      defaultTo: 0
    }
  }
};

