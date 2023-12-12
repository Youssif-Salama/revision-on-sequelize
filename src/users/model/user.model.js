import { sequelize } from "../../../connections/Db.connection.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            is: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            max: 1000,
            min: 13
        }
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['male', 'female', 'other']]
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            is: /^(?:\+20|0)?1[0-9]{9}$/
        }
    }
});

export { User };