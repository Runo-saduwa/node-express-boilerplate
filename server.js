// -------- NODE CORE MODULES ---------- //
const path = require('path');
//  ----------- NPM Packages ----------- //
const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const app = express();


const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, './public')));



app.listen(PORT, () => {
   console.log(chalk.green.inverse(`Server is up and running on port ${PORT}`));
})