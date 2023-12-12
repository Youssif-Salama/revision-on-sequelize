import { Sequelize } from "sequelize";

const sequelize = new Sequelize("learn_sequelize", "root", "", {
    host: "localhost",
    dialect: "mysql"
})
export { sequelize };