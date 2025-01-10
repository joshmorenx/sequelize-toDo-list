import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: 'test_appx',
    username: 'joshmorenx',
    password: 'Polecia/321',
    host: 'db4free.net',
    dialect: 'mysql',
    port: 3306
});

export default sequelize;
