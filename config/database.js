import { Sequelize } from "Sequelize";

const db = new Sequelize('mahasiswa_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;