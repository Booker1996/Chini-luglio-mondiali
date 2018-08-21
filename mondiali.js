const express = require('express'),
    bodyParser = require('body-parser');
const mondiali = express.Router();

var uuid = require('uuid-v4');

mondiali.get('/matches', function (req, res) {
    res.json(matches)

});

mondiali.get('/teams', function (req, res) {
    res.json(teams)

});


var matches = [];
matches[0]={
    opponent: 'Croazia',
    outcome: 'W'
};
matches[1]={
    opponent: 'Italia',
    outcome: 'L'
};
matches[2]={
    opponent: 'Germania',
    outcome: 'W'
};
matches[3]={
    opponent: 'Spagna',
    outcome: 'D'
};

var teams = [];
teams[0] = {
    id: 'ITA',
    name: 'Italia',
    is_still_in: true,
    matches: [matches[0],matches[2]]
};
teams[1] = {
    id: 'CRO',
    name: 'Croazia',
    is_still_in: false,
    matches: [matches[1],matches[3]]
};
//console.log(teams[0]);
//console.log(teams[1]);

module.exports = mondiali