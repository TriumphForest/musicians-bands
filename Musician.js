const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
let Musician = Sequelize.define ('Musician', {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
});

let musician1 = Musician.create({name:'Thomas Bangalter', instrument:'Guitar'})
let musician2 = Musician.create({name:'Guy-Manuel De Homem-Christo', instrument:'Drums'})

module.exports = {
    Musician
};