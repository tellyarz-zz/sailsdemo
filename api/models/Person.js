/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstname: {
      type: 'string',
      required: true
    },
    lastname: {
      type: 'string',
      required: true
    },
    age: {
      type: 'integer'
    },
    spouse: {
      model: 'Person'
    }
  },

  // Attribute methods
  getFullName: ()=>{
    return `${this.firstname} ${this.lastname}`;
  },

  isMarried: ()=>{
    return !!this.spouse;
  },

  getSpouse: () => {
    return this.spouse;
  }
};

