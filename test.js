
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
chai.should();
describe('String', function() {
    let name = "Ravi";

    before(function() {
        console.log("Before");
    });

    after(function() {
        console.log("After");
    }); 

    beforeEach(function() {
        console.log("Before Each");
    });

    afterEach(function() {
        console.log("After Each");
    });



    it('1. should return the correct length ', function() {
        name.should.be.a('string');
        expect(name).to.be.a('string');

        assert.typeOf(name, 'string');
    });

    it('2. should return the correct length', function() {
        name.should.have.lengthOf(4);
        expect(name).to.have.lengthOf(4);   
        assert.lengthOf(name, 4);
    });
});

// RUn command: npx mocha test.js
// .js file run command: node test.js