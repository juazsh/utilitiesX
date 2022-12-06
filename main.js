const express = require('express');
const app = express();

app.get("/", (req, res)  => {
   res.send('UtilitiesX API');
});

app.post("/subscribe", (req, res) => {
   res.status(200).json({data: {}, message: "", errors: []});
});

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => console.log('At your service on : ' + PORT));