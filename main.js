const express = require('express');
const mongoose = require('mongoose')
const keys = require('./config/keys');
const app = express();
app.use(express.json({limit: '500mb'}));
const { getCurrentCurrency } = require("./services/currency-delegator");
// temporiray: will move the bootstrap code to bootstrappig module
// connecting to mongodb
mongoose.connect(keys.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
require('./currency-notifier/db/models/Client');
require('./currency-notifier/routes')(app);

app.get("/", (req, res)  => {
   res.send('UtilitiesX API');
});

app.get("/subscribe/:currency", async (req, res) => {
   const curr = req.params.currency;
   const data = await getCurrentCurrency(curr);
   res.status(200).json({data: {data}, message: "", errors: []});
});


const PORT = process.env.PORT || 9999;

app.listen(PORT, () => console.log('At your service on : ' + PORT));


