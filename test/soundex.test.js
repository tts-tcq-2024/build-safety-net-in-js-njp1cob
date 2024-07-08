const { expect } = require('chai');
const {  generateSoundex, validate, soundexFilter, checkSoundex } = require('../src/soundex');
const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);
describe('Soundex Algorithm', () => {
         
    it('should handle empty strings', () => {
        expect(generateSoundex("")).to.equal("");
    });

     it('should handle characters', () => {
        expect(generateSoundex("TCQ")).to.equal("T200");
    });

     it('should handle single characters', () => {
        expect(generateSoundex("A")).to.equal("A000");
    });

     it('Test generateSoundex with special characters', () => {
        expect(generateSoundex("@14##")).to.equal("@000");
    });



     it('should call soundexFilter with parameters', () => {
       soundexFilter('B', 'B', '1');
    });

     it('should call checkSoundex with parameters', () => {
       checkSoundex('ABC')
    });
});
