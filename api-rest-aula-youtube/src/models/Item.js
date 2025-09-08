import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

class Item extends Model {
  static initModel() {
    super.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nome: { type: DataTypes.STRING(400), allowNull: false },
        valor: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      },
      {
        sequelize,
        tableName: "itens",
        timestamps: false,
      }
    );
  }
}

Item.initModel();

export default Item;
