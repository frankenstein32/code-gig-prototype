const Sequelize = require('sequelize');

if(process.env.DATABASE_URL){
    module.exports = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: true
      });
}else{
    module.exports = new Sequelize('codegig', 'frankenstein', '123456', {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: true
      });
}
