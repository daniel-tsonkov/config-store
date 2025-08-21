const db = require("./db");
const sequelize = require("./db");

const KV = sequelize.define("KV", {
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
