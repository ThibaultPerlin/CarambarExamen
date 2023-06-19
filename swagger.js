const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Carambar',
      version: '1.0.0',
      description: 'Documentation de l\'API Carambar',
    },
  },
  apis: ['app.js'], // Mettez le nom de votre fichier principal ici
};

const specs = swaggerJsdoc(options);

module.exports = specs;