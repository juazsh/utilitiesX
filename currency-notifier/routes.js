const { addUpdateClient } = require('./managers/client-manager');
module.exports = app => {
    app.post("/api/currency/subscribe", async (req, res) => {
        const { email, currency, threshold } = req.body;
        await addUpdateClient({ email, currency, threshold });
        res.status(200).json({
            status: 200,
            message: "you are now subscribed",
            data: {email, currency, threshold}});
    });
}