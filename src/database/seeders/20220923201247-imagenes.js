'use strict';

const imagesDB = require('../../data/images.json')

const imagesProducts = [];

imagesDB.forEach(({images}, index) => {
  
  for (let i = 0; i < images.length; i++) {

    imagesProducts.push({
      file : images[i],
      productId : index + 1,
      createdAt : new Date()
    })
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Images', imagesProducts, {});
    
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Images', null, {});
     
  }
};
