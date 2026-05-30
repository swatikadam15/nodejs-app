const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Kubernetes Cluster!');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});