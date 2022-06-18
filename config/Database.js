import {Sequelize} from "sequelize";

const db = new Sequelize('paginate_db','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;