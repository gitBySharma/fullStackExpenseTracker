const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense_tracker", "root", "Sharma@mysql1133", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;