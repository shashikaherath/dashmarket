const express = require('express');

const app = express();

const items = [
    {
        id: '101',
        name: 'Organic Fresh Milk (1L)',
        category: 'Dairy',
        price: 3.49
    },
    {
        id: '102',
        name: 'Whole Grain Bread',
        category: 'Bakery',
        price: 2.99
    },
    {
        id: '103',
        name: 'Fresh Bananas (1kg)',
        category: 'Produce',
        price: 1.89
    }
];

app.get('/items', (req, res) => {
    res.json({
        system: 'DashMarket',
        service: 'Catalog Service',
        data: items
    });
});

app.listen(5001, () =>
    console.log('DashMarket Catalog Service running on port 5001')
);