import Sequelize from "sequelize";
import config from "./config";

let instance = null;

export const sequelize = () => {
  if (instance === null) {
    try {
      instance = new Sequelize({
        dialect: "mariadb",
        ...config.mariadb
      });
  
      console.log("Database connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1);
    }
  }

  return instance;
};

export { default as Sequelize } from "sequelize";
