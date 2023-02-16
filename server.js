const express = require('express');
const app = express();

let PORT = 3000;

app.get('/', (req, res) => {
    res.render('homePage.ejs');
})
app.get('/company-history', (reg, res) => {
    res.send('Company History')
})
//past work row
app.get('/locations', (reg, res) => {
    // res.send('Locations')
	res.render('locations.ejs')
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
