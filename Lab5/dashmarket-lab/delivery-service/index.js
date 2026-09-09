const express = require('express');

const app = express();

app.get('/:id', (req, res) => {
    const id = req.params.id;

    res.json({
        system: 'DashMarket',
        service: 'Delivery Service',
        deliveryId: id,
        courier: 'DHL',
        status: 'OUT_FOR_DELIVERY'
    });
});

app.listen(5003, () =>
    console.log('DashMarket Delivery Service running on port 5003')
);