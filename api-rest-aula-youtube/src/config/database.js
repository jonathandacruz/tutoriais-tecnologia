import { Sequelize } from "sequelize";
  
export const sequelize = new Sequelize(
  process.env.db_name,
  process.env.db_user,
  process.env.db_password,
  {
    host: "postgres_db_node",
    port: 5432,
    dialect: "postgres",
    logging: false,
  }
);

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com PostgreSQL bem-sucedida!");
  } catch (error) {
    console.error(" Erro ao conectar no PostgreSQL:", error);
  }
}

connectDB()