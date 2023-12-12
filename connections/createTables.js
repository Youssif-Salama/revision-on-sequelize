import { sequelize } from "./Db.connection.js";
let createTables = () => {
    sequelize
        .sync()
        .then(() => console.log("Connected To Sequelize DB Server"))
        .catch((err) => console.log(err));
};

export { createTables };