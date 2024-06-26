const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is up and running');
});

app.post('/log', (req, res) => {
    console.log(req.body);
    res.send('Data received and logged');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    
});
