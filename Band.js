const { DataTypes } = require('sequelize/types');
const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
let Band = Sequelize.define ('Musician', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
});

let band1 = Band.create({name:'DaftPunk', genre:'Electronic Disco'})

module.exports = {
    Band
};