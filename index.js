import express from "express";
// import mysql from "mysql2";
import { sequelize } from "./connections/Db.connection.js";
import userRouter from "./src/users/routers/users.routes.js";
const server = express();
server.use(express.json());
server.use("/users", userRouter);
sequelize.authenticate()
    .then(() => {
        console.log("db connection done !");
        server.listen(10000, () => {
            console.log("Server is listening on port 10000!");
        });
    })
    .catch((error) => {
        console.error("DB connection failed", error);
    });