import express from "express";
import 'dotenv/config';
import sequelize from './db.js'

const PORT = process.env.PORT || 3000;
const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, ()=>console.log(`server is listening on port ${PORT}`));
  } catch (e) {

  }
}
