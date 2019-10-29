// -------- NODE CORE MODULES ---------- //
const path = require('path');
//  ----------- NPM Packages ----------- //
const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const app = express();

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');


const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, './public')));

app.get('/sendgrid', (req, res) => {

   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'orunosaduwa@gmail.com',
  from: 'node@app.com',
  subject: 'Letter of Acknowledgemnt',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>SendGrid is awesome</strong>',
};
sgMail.send(msg);
res.send('message sent');

})



app.listen(PORT, () => {
   console.log(chalk.green.inverse(`Server is up and running on port ${PORT}`));
})