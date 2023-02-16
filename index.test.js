const { UPSERT } = require('sequelize/types/query-types');
const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testBand1 = await Band.create({name: 'DaftPunk', genre:'Electro Disco'})
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician1 = await Musician.create({name: 'Thomas Bangalter', instrument:'Guitar'})
        const testMusician2 = await Musician.create({name: 'Guy-Manuel De Homem-Christo', instrument:'Drums'})
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})