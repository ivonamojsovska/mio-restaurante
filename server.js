const express = require('express');
const app = express();

let PORT = 3000;

app.get('/', (req, res) => {
    res.send('hi');
})
app.get('/company-history', (reg, res) => {
    res.send('Company History')
})
app.get('/past-work', (reg, res) => {
    res.send('Past Work')
})
app.get('/staff-page', (reg, res) => {
    res.send('Staff Page')
})
app.get('/contact-page', (reg, res) => {
    res.send('Contact Page')
})
app.get('/links-page', (reg, res) => {
    res.send('Links Page')
})

app.listen(PORT, () => {
    console.log('listening');
})
