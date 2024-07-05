const { expect } = require('chai');
const {  generateSoundex, validate, soundexFilter, checkSoundex } = require('../src/soundex');

describe('Soundex Algorithm', () => {
         
    it('should handle empty strings', () => {
        expect(generateSoundex("")).to.equal("");
    });

     it('should handle generateSoundex', () => {
        expect(generateSoundex("ABC")).to.equal("A120");
    });

     it('should handle generateSoundex with special characters', () => {
        expect(generateSoundex("@14##")).to.equal("@000");
    });

      it('should handle generateSoundex', () => {
        expect(generateSoundex("ABC")).to.equal("A120");
    });
    it('should handle single characters', () => {
        expect(generateSoundex("A")).to.equal("A000");
    });

    it('should call Validate', () => {
        validate('A123', '', []);
    });

     it('should call soundexFilter', () => {
       soundexFilter('ABC', [], '');
    });

     it('should call checkSoundex', () => {
       checkSoundex('ABC')
    });
});
