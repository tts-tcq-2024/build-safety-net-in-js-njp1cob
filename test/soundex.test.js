const { expect } = require('chai');
const {  generateSoundex, validate, soundexFilter, checkSoundex } = require('../src/soundex');

describe('Soundex Algorithm', () => {
         
    it('should handle empty strings', () => {
        expect(generateSoundex("")).to.equal("");
    });

     it('should handle characters', () => {
        expect(generateSoundex("ABC")).to.equal("A120");
    });

     it('should handle single characters', () => {
        expect(generateSoundex("A")).to.equal("A000");
    });

     it('Test generateSoundex with special characters', () => {
        expect(generateSoundex("@14##")).to.equal("@000");
    });

    it('should call Validate', () => {
        validate('A123', '', []);
    });

     it('should call soundexFilter with values', () => {
       soundexFilter('ABC', [], '');
       expect(validate('1', '1', 'B')).toHaveBeenCalled();
    });

     it('should call soundexFilter', () => {
       soundexFilter('B', 'B', '1');
    });

     it('should call checkSoundex', () => {
       checkSoundex('ABC')
    });
});
