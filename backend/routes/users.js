const express = require('express');
const routes = express.Router();
const house = require('../ userList');

routes.get('/', (req, res, next) => {
    res.json(house);
});

routes.get('/users/all', (req, res, next) => {
    res.json(house);
});

routes.get('/users/:id', (req, res) => {
    let response = house.filter((v) => v.id === Number(req.params.id));
    res.json(response);
});

module.exports = routes;