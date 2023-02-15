const express = require('express');
const app = express();

let PORT = 3000;

app.get('/', (req, res) => {
    res.send('hi');
})
app.get('/company-history', (reg, res) => {
    res.send('Company History')
})

app.listen(PORT, () => {
    console.log('listening');
})
