// IMPORT :
const app = require('./app');

const dotenv = require("dotenv");

const connectDatabase = require('./config/dababase');

//config file
dotenv.config({path:"backend/config/config.env"})

// connecting to dataBase: 
connectDatabase();

 app.listen(process.env.PORT , () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
 })