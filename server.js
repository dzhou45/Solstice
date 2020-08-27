const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 9000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const costumers = require('C:\\Users\\David\\OneDrive - Northeastern University\\PC\\Documents\\JS\\solstice\\customers.json')
app.get('/customers', (req, res) => {
    res.json({ express: JSON.stringify(costumers) });
});

const accounts = require('C:\\Users\\David\\OneDrive - Northeastern University\\PC\\Documents\\JS\\solstice\\accounts.json')
app.get('/accounts', (req, res) => {
    res.send({ express: JSON.stringify(accounts) });
});

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});