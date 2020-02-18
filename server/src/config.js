import dotenv from "dotenv";

dotenv.config();

export default {
  mariadb: {
    host: process.env.MARIADB_HOST || "127.0.0.1",
    port: process.env.MARIADB_PORT || 3306,
    username: process.env.MARIADB_USERNAME || "website",
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE || "website"
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || "0.0.0.0",
  isDevelopment: process.env.NODE_ENV === "development",
  uploadsPath: process.env.UPLOADS_PATH,
  secret: process.env.SECRET
};
