const express = require('express')
const app = express();
const locations = require('./models/locations.js')
const staff = require('./models/staffPage')

let PORT = 3000;

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('homePage.ejs');
})
app.get('/company-history', (reg, res) => {
    res.send('Company History')
})
//past work row
app.get('/locations', (reg, res) => {
    res.render('locations.ejs', {
        ourLocation: locations

    })
})
app.get('/staffpage', (reg, res) => {
    res.render('staffPage.ejs', {
        staff: staff
    })
})
app.get('/contactpage', (reg, res) => {
    res.render('contactPage.ejs')
})
app.get('/links-page', (reg, res) => {
    res.send('Links Page')
})

app.listen(PORT, () => {
    console.log('listening');
})
