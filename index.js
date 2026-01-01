app.get('/health', (req, res) => {
    if (!res) {
        res.status(500).send('Unhealthy');
    } else {
        res.status(200).send('Healthy');
    }
});


