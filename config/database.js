const Sequelize = require('sequelize');

if(process.env.HEROKU_POSTGRESQL_BRONZE_URL){
    module.exports = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: true
      });
}else{
    module.exports = new Sequelize('codegig', 'frankenstein', '123456', {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: true,
      });
}
