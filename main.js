const express = require('express');
const app = express();

app.get("/", (req, res)  => {
   res.send('UtilitiesX API');
});

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => console.log('At your service on : ' + PORT));