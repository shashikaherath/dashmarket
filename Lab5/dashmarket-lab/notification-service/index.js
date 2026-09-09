const express = require('express');

const app = express();

app.use(express.json());

app.post('/notify', (req, res) => {
    const notification = req.body;

    console.log(
        `[${new Date().toISOString()}] Notification received:`,
        notification
    );

    res.status(200).json({
        message: 'Notification received successfully'
    });
});

app.listen(5004, () =>
    console.log('DashMarket Notification Service running on port 5004')
);