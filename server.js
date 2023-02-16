const express = require('express')
const app = express();
const locations = require('./models/locations.js')
const staff = require('./models/staffPage')
const menu = require('./models/menuPage')

let PORT = 3000;
app.set('view engine', 'ejs')
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('homePage.ejs');
})
app.get('/history', (reg, res) => {
    res.render('companyHistory.ejs')
})
//past work row
app.get('/locations', (reg, res) => {
    res.render('locations.ejs', {
        ourLocation: locations

    })
})
app.get('/staff', (reg, res) => {
    res.render('staffPage.ejs', {
        staff: staff
    })
})
app.get('/contact', (reg, res) => {
    res.render('contactPage.ejs')
})
app.get('/menu', (reg, res) => {
    res.render('menuPage.ejs', {
        menu: menu
    })
})

app.listen(PORT, () => {
    console.log('listening');
})
