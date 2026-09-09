const express = require('express');

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    const order = req.body;

    try {
        await fetch('http://notification-service:5004/notify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `New order received`,
                order: order
            })
        });

        res.status(201).json({
            system: 'DashMarket',
            service: 'Order Service',
            message: 'Order created successfully',
            order: order
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Order creation failed'
        });
    }
});

app.listen(5002, () =>
    console.log('DashMarket Order Service running on port 5002')
);