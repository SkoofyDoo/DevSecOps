const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    if (!res) {
        res.status(500).send('Unhealthy');
    } else {
        res.status(200).send('Healthy');
    }
});

function add(a, b) {
    return a + b;
}

module.exports = { app, add };
